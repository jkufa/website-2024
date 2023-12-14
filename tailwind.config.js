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
				'off-white': '#fbfff5'
			},
			colors: {
				'off-black': '#0b0903',
				'off-white': '#fbfff5'
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

// color1: 0x080500,
// color2: 0xB2B99F
