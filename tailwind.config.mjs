/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0b0d11', // Deep Obsidian
          900: '#12151c', // Rich Midnight
          850: '#171b24', // Surface Elevate
          800: '#1e232e', // Card Dark
          700: '#2a3140', // Border Subtle
          600: '#3e4859',
        },
        stone: {
          50: '#faf9f6',
          100: '#f5f3ee',
          200: '#e8e5de',
          300: '#d5d0c5',
          400: '#9ca3af',
          500: '#6b7280',
        },
        gold: {
          300: '#f5e6cf',
          400: '#dfc08f',
          500: '#c5a368',
          600: '#a7854d',
        },
        brand: {
          red: '#e31837', // Official Mahindra Red
          crimson: '#c8102e',
          deep: '#990f23',
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
        'brand-glow': '0 0 40px -10px rgba(227, 24, 55, 0.35)',
        'gold-glow': '0 0 40px -10px rgba(197, 163, 104, 0.3)',
      }
    },
  },
  plugins: [],
};
