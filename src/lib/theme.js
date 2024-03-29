// @ts-check
import defaultTheme from 'tailwindcss/defaultTheme';

/**
 * Collection of custom colors to use in tailwind and components
 */
export const colors = {
	'off-black': '#0B0904',
	pistachio: '#B2B99F',
	'pistachio-lite': '#6F7361',
	ivory: '#F0F5E4',
	stone: '#b2b99f66', // Opacity value of 0.4
	'ivory-highlight': 'rgba(240, 245, 228, 0.25)',
};

/** @type {import('tailwindcss').Config['theme']} */
export const theme = {
	fontFamily: {
		sans: ['Inter2', ...defaultTheme.fontFamily.sans],
		heading: ['Archivo Expanded', ...defaultTheme.fontFamily.sans],
	},
	letterSpacing: {
		...defaultTheme.letterSpacing,
		tightest: '-.75rem',
		tighter: '-.25rem',
	},
	backgroundSize: {
		double: '200%',
	},
	boxShadow: {
		outline: `0 0 0 0.25rem ${colors.stone}`,
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
			'clamp-sm': 'clamp(.875rem, .9vw, 1.25rem)',
			'clamp-base': 'clamp(1rem, .9vw, 2rem)',
			'clamp-md': 'clamp(1rem, 1.6vw, 2.25rem)',
			'clamp-lg': 'clamp(1.25rem, 2.1vw, 4rem)',
			'clamp-xl': 'clamp(2rem, 5.5vw, 6rem)',
			'clamp-2xl': 'clamp(1.875rem, 5vw, 9rem)',
			'clamp-9xl': 'clamp(3.25rem, 11vw, 20rem)',
		},
		lineHeight: {
			11: '3rem',
			'clamp-lg': '1.3',
		},
		margin: {
			'1/2': '50vh',
			'1/3': '33vh',
			'1/4': '25vh',
			'4%': '4%',
		},
		content: {
			empty: '""',
		},
		transitionTimingFunction: {
			'circular-in-out': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
		},
		screens: {
			'4xl': '3072px',
		},
		width: {
			arrow: 'clamp(0.625rem, .6vw, 1.5rem)',
		},
	},
};
