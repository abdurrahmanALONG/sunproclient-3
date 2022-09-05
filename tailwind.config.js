/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: '#F3F6FB',
        hoverColor: '#09acb5'
      }
    },
  },
  plugins: [require("daisyui")],
}