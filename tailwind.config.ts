import tailwindcssAnimate from "tailwindcss-animate";

interface KeyframeDefinition {
	from: { [key: string]: string };
	to: { [key: string]: string };
}

type Keyframes = {
	[key: string]: KeyframeDefinition;
};

type Animation = {
	[key: string]: string;
};


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
				primary: string,
				bglight: string,
				bgPrimaryLight: string
			};
			keyframes: Keyframes;
			animation: Animation;
			darkMode: string[];
		}
	};
	content: string[]
} = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				bgPrimaryLight: '#F7FDFB',
				bglight: '#F9FAFE',
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
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [tailwindcssAnimate],
};

export default config;