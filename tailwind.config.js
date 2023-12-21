/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      accent1: "#ff4d00",
      accent2: "#ff5207",
      accent3: "#fe9c29",
      accent4: "#ff7a00",
      primary1: "#070707",
      primary2: "#4e4e4e",
      primary3: "#9c9c9c",
      primary4: "#dbdbdbd",
      secondary1: "#d5d5d5",
      secondary2: "#070707",
      secondary3: "#e9e9e9",
      secondary4: "#f1f1f1",
    },
    extend: {
      boxShadow: {
        "3xl": "-1px 1px 20px -5px rgba(34, 60, 80, 0.26)",
      },
    },
  },
  plugins: [require("tailwindcss-text-balance")],
};
