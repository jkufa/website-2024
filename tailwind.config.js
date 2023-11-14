/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['DM sans, Helvetica, Arial, sans-serif']
		},
		extend: {
			backgroundColor: {
				'off-white': '#F4F2F7'
			},
			colors: {
				'off-black': '#0C0C17'
			}
		}
	},
	plugins: []
};
