/// TODO: Make this file readable

import {
	Mesh,
	OrthographicCamera,
	Scene,
	WebGLRenderer,
	PlaneGeometry,
	Color,
	Vector3,
	ShaderMaterial,
	Clock
} from 'three';

const params = {
	speed: 0.05,
	scale: 150.0,
	warp: 0.6,
	exponent: 0.8,
	sharpness: 0.92,
	color1: '#0C0C17',
	color2: '#F4F2F7'
};
// #F4F2F7
// #0C0C17

const scene = new Scene();
const plane = new PlaneGeometry(2, 2); // TODO: figure out what this does lol

// const currentScriptPath = import.meta.url;
// const currentScriptDirectory = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/'));
// const fragmentShader = await (await fetch(`${currentScriptDirectory}/shaders/spiral.glsl`)).text();
const fragmentShader = `
#include <common>

uniform vec3 iResolution;
uniform float iTime;
uniform float warp;
uniform float exponent;
uniform float sharpness;
uniform float scale;
uniform vec3 color1;
uniform vec3 color2;
// uniform vec3 color3;

float easeOutExp(float k) { // good
  return k == 1.0 ? 1.0 : 1.0 - pow( 2.0, - 10.0 * k );
}

float ease(float k) {
  return easeOutExp(k);
}

float spiral(vec2 m) {
  float r = length(m);
  float a = atan(m.y, -m.x);
  float rExp = pow(r, exponent);
  rExp = mix(rExp, ease(rExp), warp);
  float v = sin(scale * (rExp - (1.0 / scale) * a - iTime));

  float range = mix(rExp, 1.0, 1.0 - rExp) * 0.5; // awesome!
  range = mix(range, 0.0, sharpness);
  v = smoothstep(0.99 - range, 0.99 + range, v);
  return clamp(v, 0.0, 1.0);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = vec2(fragCoord.xy / iResolution.y);
    uv.x -= (iResolution.x - iResolution.y) / iResolution.y * 0.5;

    vec2 m = vec2(0.5, 0.5);

    float v = spiral(m-uv);

    vec3 col = mix(color1, color2, v);

    fragColor = vec4(col, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;
const uniforms = {
	iTime: { value: 0 },
	iResolution: { value: new Vector3() },
	warp: { value: params.warp },
	exponent: { value: params.exponent },
	sharpness: { value: params.sharpness },
	scale: { value: params.scale },
	color1: { type: 'vec3', value: new Color(params.color1) },
	color2: { type: 'vec3', value: new Color(params.color2) }
};
const material = new ShaderMaterial({
	fragmentShader,
	uniforms
});
const clock = new Clock();
let time = 0;

scene.add(new Mesh(plane, material));

let renderer: WebGLRenderer;
const camera = new OrthographicCamera(
	-1, // left
	1, // right
	1, // top
	-1, // bottom
	-1, // near,
	1 // far
);

let c: HTMLCanvasElement;
// set this to avoid issues when moving browser window across different screen types
let pixelRatio: number;

const animate = () => {
	const delta = clock.getDelta();
	time += delta * params.speed;

	resize();
	uniforms.iTime.value = time;
	uniforms.iResolution.value.set(
		c.clientWidth * pixelRatio,
		c.clientHeight * pixelRatio,
		1
	);

	renderer.render(scene, camera);
	// TODO: don't request this on mobile unless with changes
	requestAnimationFrame(animate);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight, false);
};

export const createScene = (el: HTMLCanvasElement) => {
	c = el;
	renderer = new WebGLRenderer({ antialias: true, canvas: el });

  pixelRatio = window.devicePixelRatio;
	renderer.setPixelRatio(pixelRatio);

	animate();
};

// window.addEventListener('resize', resize);
