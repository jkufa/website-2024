import { error } from '@sveltejs/kit';
import { WORK_DATA } from '$lib';

export function load({ params }) {
	const data = WORK_DATA.find((wd) => wd.slug === params.slug);

	if (!data) throw error(404);

	return {
		title: data.title,
		description: data.description,
		imgs: data.imgs,
		links: data.links,
	};
}
