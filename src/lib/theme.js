// @ts-check

/**
 * Collection of custom colors to use in tailwind and components
 */
export const colors = {
	'off-black': '#0B0904',
	pistachio: '#B2B99F',
	stone: '#b2b99f66', // Opacity value of 0.4
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
	boxShadow: {
		outline: '0 0 0 0.25rem rgba(178, 185, 159, 0.4);',
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
		transitionTimingFunction: {
			'circular-in-out': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
		},
	},
};
