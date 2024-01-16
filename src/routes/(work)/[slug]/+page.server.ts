import { compile } from 'mdsvex';
import { error } from '@sveltejs/kit';
import { WORK_DATA } from '$lib';

export async function load({ params }) {
	const data = WORK_DATA.find((wd) => wd.slug === params.slug);

	if (!data) throw error(404);

	const compiled = await compile(data.description);

	return {
		title: data.title as string,
		description: compiled?.code,
		imgs: data.imgs,
		links: data.links,
		meta: data.meta,
	};
}
