import tailwindcssAnimate from "tailwindcss-animate";

const config: {
	plugins: { handler: () => void }[];
	theme: {
		extend: {
			borderRadius: { md: string; sm: string; lg: string };
			colors: {
				border: string;
				textprimary: string;
				ring: string;
				popover: { foreground: string; DEFAULT: string };
				danger: string;
				accent: string;
				bgdark: string;
				destructive: { foreground: string; DEFAULT: string };
				secondary: string;
				input: string;
				warning: string;
				yellowlish: string;
				muted: { foreground: string; DEFAULT: string };
				chart: { "1": string; "2": string; "3": string; "4": string; "5": string };
				card: { foreground: string; DEFAULT: string };
				primary: string
			}
		}
	};
	content: string[]
} = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#0BBB8A',
				secondary: '#FFA500',
				accent: '#F88787',
				danger: '#D43B3B',
				warning: '#F5C449',
				bgdark: '#02042C',
				textprimary: '#034B72',
				yellowlish: '#FFD300',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [tailwindcssAnimate],
};

export default config;