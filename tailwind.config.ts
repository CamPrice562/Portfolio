
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
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyber: {
					purple: '#14b8a6',
					green: '#14b8a6',
					dark: '#0d0d12',
					darker: '#090912',
					matrix: '#134e4a',
					glow: '#14b8a633'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 8px 2px var(--glow-color, #14b8a633)' },
					'50%': { boxShadow: '0 0 18px 4px var(--glow-color, #14b8a633)' }
				},
				'text-blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'typewriter': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'matrix-falling': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0.3' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'text-blink': 'text-blink 1.5s ease-in-out infinite',
				'typewriter': 'typewriter 2s steps(40, end) forwards',
				'float': 'float 5s ease-in-out infinite',
				'gradient-x': 'gradient-x 3s ease infinite',
				'matrix-falling': 'matrix-falling 20s linear infinite'
			},
			fontFamily: {
				mono: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
				tech: ['Orbitron', 'Rajdhani', 'sans-serif'],
			},
			backgroundImage: {
				'cyber-grid': 'radial-gradient(#14b8a6 1px, transparent 1px)',
				'matrix': 'linear-gradient(180deg, rgba(0,59,0,0.15) 0%, rgba(0,59,0,0.3) 100%)',
				'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1), transparent 60%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
