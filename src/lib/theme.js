// @ts-check

/**
 * Collection of custom colors to used in tailwind and can be imported in components
 */
export const colors = {
	'off-black': '#0B0904',
	pistachio: '#B2B99F',
	stone: '#b2b99f66', //opacity value of 0.4
};

/** @type {import('tailwindcss').Config['theme']} */
export const theme = {
	fontFamily: {
		sans: ['Archivo Expanded, Helvetica, Arial, sans-serif'],
	},
	letterSpacing: {
		tightest: '-.75rem',
		tighter: '-.25rem',
	},
	backgroundSize: {
		double: '200%',
	},
	extend: {
		backgroundColor: {
			...colors,
		},
		colors: {
			...colors,
		},
		fontSize: {
			'10xl': '9.5rem',
			huge: '12rem',
		},
		lineHeight: {
			11: '3rem',
		},
		margin: {
			'half-screen': '50vh',
		},
		content: {
			empty: '""',
		},
	},
};
