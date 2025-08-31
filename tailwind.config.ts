import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Udisha Foundation Brand Colors
				udisha: {
					DEFAULT: 'hsl(var(--udisha-pink))', // #e91e63
					light: 'hsl(var(--udisha-pink-light))',
					dark: 'hsl(var(--udisha-pink-dark))',
					bg: 'hsl(var(--udisha-pink-bg))', // #fce4ec
					soft: 'hsl(var(--udisha-pink-soft))', // #f8bbd9
				},
				
				// Text Colors
				text: {
					DEFAULT: 'hsl(var(--foreground))',
					muted: 'hsl(var(--text-muted))',
					light: 'hsl(var(--text-light))',
				},
				
				// Gray Scale
				gray: {
					50: 'hsl(var(--gray-50))',
					100: 'hsl(var(--gray-100))',
					200: 'hsl(var(--gray-200))',
					600: 'hsl(var(--gray-600))',
					700: 'hsl(var(--gray-700))',
					800: 'hsl(var(--gray-800))',
				},
				
				// WhatsApp Green
				whatsapp: 'hsl(var(--whatsapp))',
				
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-impact': 'var(--gradient-impact)',
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'header': 'var(--shadow-header)',
				'whatsapp': 'var(--shadow-whatsapp)',
			},
			transitionProperty: {
				'smooth': 'var(--transition-smooth)',
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
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
