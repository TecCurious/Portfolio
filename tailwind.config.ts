// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'spin-slow': {
          '100%': {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'spin-slow': 'spin-slow 8s linear infinite'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};