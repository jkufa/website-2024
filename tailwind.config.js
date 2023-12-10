/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Archivo Expanded, Helvetica, Arial, sans-serif']
		},
		letterSpacing: {
			tightest: '-.75rem',
			tighter: '-.25rem'
		},
		extend: {
			backgroundColor: {
				'off-white': '#FBFFF5'
			},
			colors: {
				'off-black': '#0A0903',
				'off-white': '#FBFFF5'
			},
			fontSize: {
				'10xl': '9.5rem'
			},
			lineHeight: {
				11: '3rem'
			}
		}
	},
	plugins: []
};
