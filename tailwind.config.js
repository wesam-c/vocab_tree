/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on the 'dark' class
  theme: {
    extend: {
      fontFamily: {
        // Use system fonts to support emojis
        sans: ['ui-sans-serif', 'system-ui', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
