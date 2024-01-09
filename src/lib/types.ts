export type WorkData = {
	slug: string;
	title: string;
	description: string;
	imgs: Image[];
	links: Link[];
};

export type Image = {
	src: string;
	alt: string;
};

export type Link = {
	href: string;
	label: string;
};
