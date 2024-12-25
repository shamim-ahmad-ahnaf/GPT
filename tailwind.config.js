/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'color-change': 'color-change 15s ease infinite',
        'slow-pan': 'slow-pan 20s linear infinite',
        'slow-pan-reverse': 'slow-pan-reverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 15s linear infinite',
        'rotate-slower': 'rotate-slower 30s linear infinite',
        'fade-in': 'fade-in 2s ease-out',
        'fade-in-delayed': 'fade-in 3s ease-out',
        'spin-slow': 'spin-slow 10s linear infinite',
        'fade-in-up': 'fade-in-up 0.7s ease-in-out',
      },
      keyframes: {
        'slow-pan': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-50%, -50%)' },
        },
        'slow-pan-reverse': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50%, 50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-slower': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'color-change': {
          '0%': { background: 'linear-gradient(to right, #00FF00, #FFFF00)' },
          '25%': { background: 'linear-gradient(to right, #FFFF00, #FF0000)' },
          '50%': { background: 'linear-gradient(to right, #FF0000, #0000FF)' },
          '75%': { background: 'linear-gradient(to right, #0000FF, #8A2BE2)' },
          '100%': { background: 'linear-gradient(to right, #8A2BE2, #00FF00)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
