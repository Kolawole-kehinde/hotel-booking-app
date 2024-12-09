/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#003B95",
          light: "#f0f6ff",
        
        },
        secondary: {
          DEFAULT: "#006CE4",
        },
        dark: {
          DEFAULT: "#171717",
          100: "#595959",
          200: "#e7e7e7",
        },
      },
      backgroundImage: {
        heroImg: "url('/src/public/asset/hero-bg.jpeg')",
        lagos: "url('/src/public/asset/lagos.jpg')", 
        ikeja: "url('/src/public/asset/ikeja.jpg')", 
        lekki: "url('/src/public/asset/Lekki.jpg')", 
        abuja: "url('/src/public/asset/Abuja.jpg')", 
        accra: "url('/src/public/asset/accra.jpg')", 
        trip: "url('/src/public/asset/next=trip.JPG')", 
      },
    },
  },
  plugins: [],
};
