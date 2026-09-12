/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0e121a', // Refined Deep Navy-Graphite (luminous, not pitch black)
          900: '#141924', // Luminous Midnight Slate
          850: '#1c2230', // Elevated Card Surface
          800: '#252d3f', // Card Highlight
          700: '#343f56', // Crisp Visible Border
          600: '#4b5978',
        },
        stone: {
          50: '#fcfbf9',
          100: '#f7f5f0',
          200: '#ebe7de',
          300: '#dad4c7',
          400: '#b8b2a5',
          500: '#8e877a',
        },
        champagne: {
          50: '#fdfbf7',
          100: '#f9f5ed',
          200: '#f2eadb',
          300: '#e6d8bf',
          400: '#d5bf9b',
          500: '#c0a377',
        },
        gold: {
          300: '#f9edd8',
          400: '#e8cb97',
          500: '#d4af66', // Radiant Royal Gold
          600: '#b89045',
          700: '#926f2d',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        brand: {
          red: '#e31837', // Official Mahindra Red
          crimson: '#c8102e',
          deep: '#990f23',
          glow: '#ff2d4f',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      boxShadow: {
        'brand-glow': '0 0 40px -8px rgba(227, 24, 55, 0.4)',
        'gold-glow': '0 0 40px -8px rgba(212, 175, 102, 0.35)',
        'card-elevate': '0 16px 48px -12px rgba(0, 0, 0, 0.5), 0 0 24px -4px rgba(212, 175, 102, 0.12)',
        'card-hover': '0 24px 60px -12px rgba(0, 0, 0, 0.65), 0 0 32px 0 rgba(212, 175, 102, 0.22)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
};
