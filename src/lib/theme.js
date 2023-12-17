// @ts-check

/**
 * Collection of custom colors to used in tailwind and can be imported in components
 */
export const colors = {
	'off-black': '#0B0904',
	'pistachio': '#B2B99F'
};

/** @type {import('tailwindcss').Config['theme']} */
export const theme = {
	// edit your tailwind theme here!
	// https://tailwindcss.com/docs/adding-custom-styles
	fontFamily: {
		sans: ['Archivo Expanded, Helvetica, Arial, sans-serif']
	},
	letterSpacing: {
		tightest: '-.75rem',
		tighter: '-.25rem'
	},
	extend: {
		backgroundColor: {
			...colors
		},
		colors: {
			...colors
		},
		fontSize: {
			'10xl': '9.5rem',
			huge: '12rem'
		},
		lineHeight: {
			11: '3rem'
		},
		margin: {
			'half-screen': '50vh'
		}
	}
};
