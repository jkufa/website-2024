<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { Color, PlaneGeometry, Vector3 } from 'three';
	import fragmentShader from '$lib/shaders/spiral.glsl?raw';

	export let w: number;
	export let h: number;

	let time = 0;

	const pixelRatio = window.devicePixelRatio;
	const params = {
		speed: 0.05,
		scale: 150.0,
		animateScale: false,
		warp: 0.75,
		exponent: 0.9,
		sharpness: 0.9,
		color1: 0x0b0903,
		color2: 0xfbfff5
	};
	const uniforms = {
		iTime: { value: time },
		iResolution: { value: new Vector3(w * pixelRatio, h * pixelRatio, 1) },
		warp: { value: params.warp },
		exponent: { value: params.exponent },
		sharpness: { value: params.sharpness },
		scale: { value: params.scale },
		color1: { type: 'vec3', value: new Color(params.color1).convertLinearToSRGB() },
		color2: { type: 'vec3', value: new Color(params.color2).convertLinearToSRGB() }
	};
	const geometry = new PlaneGeometry(w, h);

  useTask((delta) => {
		time += delta * params.speed;
		uniforms.iTime.value = time;
    uniforms.iResolution.value.set(w * pixelRatio, h * pixelRatio, 1); 
	});
</script>

<T.Mesh {geometry}>
	<T.ShaderMaterial {fragmentShader} {uniforms} />
</T.Mesh>
