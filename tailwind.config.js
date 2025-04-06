/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-x': 'pulse-x 2s infinite',
      },
      keyframes: {
        'pulse-x': {
          '0%, 100%': { opacity: 1, transform: 'translateX(0)' },
          '50%': { opacity: 0.7, transform: 'translateX(3px)' },
        }
      }
    }
  },
  plugins: [],
};
