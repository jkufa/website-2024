import type { WorkData } from './types';

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
		title: 'Journey',
		description:
			// TODO: support markdown on work page
			`Journey is a goal-based todo app designed to de-clutter your todo lists so you can achieve more.

      ## Features

      * **Auto archival**: tasks will be automatically moved to an archived section when their due date is a week past to help users keep their inbox clutter-free.
      * **Progress tracking:** Goals have a progress bar to indicate the percentage complete. Goals are considered completed once all of its tasks are complete.
      * **Target dates:** Goals and tasks can both have a target completion date. Goals inherit the latest target date of its tasks by default.
      * **Goal organization:** Users can re-organize their goals in the sidebar in whatever order they’d like.
      * **Subgoals:** Users can nest goals within goals for even more customization.
      * **Hotkeys:** press the G key to quickly add a goal, or the T key to quickly add a task


      More functionality is on the way.`,
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
