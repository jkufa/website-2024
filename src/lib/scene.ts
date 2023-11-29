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
	speed: 0.075,
	scale: 100.0,
	animateScale: false,
	warp: 0.8,
	exponent: 0.9,
	sharpness: 0.9,
	color1: '#000',
	color2: '#fff'
};

const scene = new Scene();
const plane = new PlaneGeometry(2, 2); // TODO: figure out what this does lol

const currentScriptPath = import.meta.url;
const currentScriptDirectory = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/'));
const fragmentShader = await (await fetch(`${currentScriptDirectory}/shaders/spiral.glsl`)).text();
const uniforms = {
	iTime: { value: 0 },
	iResolution: { value: new Vector3() },
	warp: { value: params.warp },
	exponent: { value: params.exponent },
	sharpness: { value: params.sharpness },
	scale: { value: params.scale },
	color1: { type: 'vec3', value: new Color(params.color1) },
	color2: { type: 'vec3', value: new Color(params.color2) },
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

const animate = () => {
  const delta = clock.getDelta();
	time += delta * params.speed;

	uniforms.iTime.value = time;

	renderer.render(scene, camera);
	requestAnimationFrame(animate);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
};

export const createScene = (el: HTMLCanvasElement) => {

  renderer = new WebGLRenderer({ antialias: true, canvas: el });
	renderer.setPixelRatio(window.devicePixelRatio);
  uniforms.iResolution.value.set(el.clientWidth * window.devicePixelRatio, el.clientHeight * window.devicePixelRatio, 1);

	resize();
	animate();
};

window.addEventListener('resize', resize);
