/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // or 'media' if you prefer system-based dark mode
  theme: {
    extend: {
      colors: {
        gradientStart: '#111418',
        gradientMid: '#302b63',
        gradientEnd: '#24243e',
      },
    },
  },
  plugins: [],
};
