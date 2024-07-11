/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'img-screen-1': `url(Images/bg-1.png)`,
      }),
      fontFamily: {
        'dahlia': ['dahlia','sans-serif'],
        'prim': ['Inter', 'sans-serif'],
        'sec': ['Poppins', 'arial'],
        'cursive': ['Ms Madi'],
        'guest': ['Space Grotesk'],
      },
    },
  },
  plugins: [],
}