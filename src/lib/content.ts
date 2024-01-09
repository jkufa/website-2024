import type { WorkData } from './types';

export const ABOUT = {
	title: 'Developer, Designer',
	content: [
		'Jack Kufa is a Software Engineer that builds fast, accessible and responsive experiences for web. He’s been passionate about the web ever since he designed his first website in 2007 with Microsoft Publisher.',
		'After graduating from Missouri University of Science and Technology in 2021, Jack Kufa began his career at Service Management Group where he contributed to their UI library, flagship web app, and new greenfield development. He played a major role in their new hierarchy management system, leading the development of its onboarding wizard.',
		'Jack’s skill in multiple frontend frameworks paired with his experience setting up project infrastructure from scratch make him a great asset not only for building amazing user experiences but also maintaining them.',
	],
};

export const SKILLS = [
	'C#',
	'Java',
	'Python',
	'Javascript',
	'Typescript',
	// Empty strings give us some control over the number of skills in each row
	'',
	'',
	'SvelteKit',
	'Svelte',
	'NextJS',
	'React',
	'Angular',
	'AngularJS',
	'.NET',
	'CSS',
	'HTML5',
	'TailwindCSS',
	'Sass',
	'GSAP',
	'ThreeJS',
	'RxJs',
	'Node',
	'Postgres',
	'MSSQL',
	'Jest',
	'Cypress',
	'Playwright',
	'CI/CD',
	'GitHub Actions',
	'Figma',
	'Storybook',
	'Google Lighthouse',
	'WCAG 2.0',
];

export const WORK_DATA: WorkData[] = [
	{
		slug: 'journey',
		title: 'JOURNEY',
		description:
    // TODO: support markdown on work page
    `Journey is a goal-based todo app designed to declutter your todo lists so you can achieve more. 

      Features:
      * Progress tracking: Goals are complete once you complete all of its tasks. Goals have a progress bar to indicate the percentage complete.
      * Target dates: Goals and tasks can both have target dates set. Goals inherit the latest target date of its tasks by default.
      * Goal organization: Users can re-organize their goals in the sidebar in whatever order they’d like!
      * Subgoals: Users can nest goals within goals to really organize things how they see fit.
      * Hotkeys: press the G key to quickly add a goal, or the T key for a quickly adding a task`,
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
				href: 'https://journeytodo.com',
				label: 'Visit Site',
			},
			{
				href: 'https://github.com/JourneyTodo/journey-web',
				label: 'View GitHub',
			},
		],
	},
];
