import { error } from '@sveltejs/kit';
import { workData } from '$lib';

export function load({ params }) {
	console.log(params.slug);
	const data = workData[params.slug];
	if (!data) throw error(404);
	return {
		title: data.title,
		description: data.description,
		imgs: data.imgs,
		links: data.links,
	};
}
