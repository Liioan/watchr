/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#f4f7fa",
        background: "#030507",
        primary: "#5d8dc3",
        secondary: "#00137f",
        accent: "#871d82",
      },
      fontFamily: {
        heading: "Montserrat",
        body: "Nunito Sans",
      },
    },
  },
  plugins: [],
};
