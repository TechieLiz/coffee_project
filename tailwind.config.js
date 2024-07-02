/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b141c",
        secondary: "#f3961c",
        dark: "#252525",
        "light-gray": "#f2f2f2",
      },
      maxWidth: {
        "8xl": "1300px",
      },
    },
  },
  plugins: [],
};
