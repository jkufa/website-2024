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
				'off-white': '#F4F2F7'
			},
			colors: {
				'off-black': '#0C0C17',
				'off-white': '#F4F2F7'
			},
			fontSize: {
				'text-10xl': '10rem'
			},
			lineHeight: {
				11: '3rem'
			}
		}
	},
	plugins: []
};
