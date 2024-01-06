type WorkData = {
	slug: string;
	title: string;
	description: string;
	imgs: Image[];
	links: Link[];
};

type Image = {
	src: string;
	alt: string;
};

type Link = {
	href: string;
	label: string;
};

export const workData: { [key: string]: WorkData } = {
	journey: {
		slug: 'journey',
		title: 'JourneyTodo',
		description:
			'Jack Kufa is a Software Engineer that builds fast, accessible and responsive experiences for web. His experience with multiple frontend frameworks and setting up project infrastructure from scratch makes him a great asset for building amazing user experiences and maintaining them.',
		imgs: [
			{
				src: 'https://placehold.co/600x400/EEE/31343C',
				alt: 'UI for a todo management app',
			},
			{
				src: 'https://placehold.co/600x400/EEE/31343C',
				alt: 'UI for a todo management app',
			},
			{
				src: 'https://placehold.co/600x400/EEE/31343C',
				alt: 'UI for a todo management app',
			},
			{
				src: 'https://placehold.co/600x400/EEE/31343C',
				alt: 'UI for a todo management app',
			},
		],
		links: [
			{
				href: 'journeytodo.com',
				label: 'JOURNETODO.COM',
			},
			{
				href: 'github.com',
				label: 'GITHUB',
			},
		],
	},
};
