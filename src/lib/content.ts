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
      * **Goal organization:** Users can re-organize their goals in the sidebar in whatever order they fancy.
      * **Subgoals:** Users can nest goals within goals for even more customization.
      * **Hotkeys:** press the G key to quickly add a goal, or the T key to quickly add a task
      `,
		meta: "Jack Kufa's project Journey, a goal-based todo app designed to de-clutter your todo lists so you can achieve more.",
		imgs: [
			{
				src: 'thumbnail.webp',
				alt: 'Journey logo that strictly says Journey',
			},
			{
				src: '0.webp',
				alt: 'Sign up UI screen for Journey',
			},
			{
				src: '1.webp',
				alt: ' UI screen for general inbox with a todo item',
			},
			{
				src: '2.webp',
				alt: 'UI screen for Sous Vide Cooking goal with overdue todo items and an archived section. Restore archived items with a button click',
			},
			{
				src: '3.webp',
				alt: 'UI for Financial Plan goal with items due today. Postpone todo items to tomorrow with a button click inside a menu',
			},
			{
				src: '4.webp',
				alt: 'UI screen for all completed tasks. Completed items can be uncompleted with a button click',
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
