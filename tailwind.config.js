/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dahlia: ["dahlia", "sans-serif"],
        prim: ["Inter", "sans-serif"],
        sec: ["Poppins", "arial"],
        cursive: ["Ms Madi"],
        guest: ["Space Grotesk"],
      },
    },
  },
  plugins: [],
};
