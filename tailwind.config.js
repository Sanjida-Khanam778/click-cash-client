/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {
        logoFont: ["Fleur De Leah", "sans-serif"],
        body: ["Poppins"],
      },
    },
  },
  plugins: [require('daisyui'),
  ],
}

