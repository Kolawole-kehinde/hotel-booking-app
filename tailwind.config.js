/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto : ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#003B95",
        },
      },
      backgroundImage: {
        'heroImg': "url('/src/public/asset/hero-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
