// @ts-check

/**
 * Collection of custom colors to use in tailwind and components
 */
export const colors = {
	'off-black': '#0B0904',
	pistachio: '#B2B99F',
	ivory: '#F0F5E4',
	stone: '#b2b99f66', // Opacity value of 0.4
};

/** @type {import('tailwindcss').Config['theme']} */
export const theme = {
	fontFamily: {
		sans: ['Segoe UI', 'system-ui'],
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
			'clamp-base': 'clamp(0.875rem, 1vw, 1.5rem)',
			'clamp-lg': 'clamp(1.25rem, 2.5vw, 3.75rem)',
			'clamp-xl': 'clamp(2rem, 5.5vw, 6rem)',
			'clamp-2xl': 'clamp(2rem, 5.5vw, 9rem)',
			'clamp-9xl': 'clamp(4rem, 11vw, 20rem)',
		},
		lineHeight: {
			11: '3rem',
		},
		margin: {
			'1/2': '50vh',
			'1/3': '33vh',
			'1/4': '25vh',
		},
		content: {
			empty: '""',
		},
		transitionTimingFunction: {
			'circular-in-out': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
		},
	},
};
