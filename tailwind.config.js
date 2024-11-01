import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				light: {
					layout: {},
					colors: {},
				},
				dark: {
					layout: {},
					colors: {
						background: '#F9F8F1',
						foreground: '#2E2E27',
						primary: {
							100: '#F0F7E7',
							200: '#E0F0D1',
							300: '#BCD4AB',
							400: '#8EA980',
							500: '#56704C',
							600: '#406037',
							700: '#2C5026',
							800: '#1B4018',
							900: '#0E350E',
							DEFAULT: '#2E2E27',
							foreground: '#2E2E27',
						},
						secondary: {
							100: '#F9FEDC',
							200: '#F1FDB9',
							300: '#E5F995',
							400: '#D8F47A',
							500: '#C5EE4F',
							600: '#A2CC39',
							700: '#82AB27',
							800: '#638A19',
							900: '#4E720F',
							DEFAULT: '#071F13',
							foreground: '#ffffff',
						},
					},
				},
			},
		}),
	],
};

export default config;
