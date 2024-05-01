/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-background": "#525252",
        "background": "#171717",
        "primary": "#fcd34d",
        "border": "#404040"
      }
    },
  },
  plugins: [],
};