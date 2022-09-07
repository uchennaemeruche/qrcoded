/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["inter", "sans-serif"],
      },
      backgroundColor:{
        darkbrown: "#222127",
        pinkbanner: "#E1BECF",
        greenbanner: "#87D8A7",
        graybanner: "#A6BFE3",
        brownbanner: "#DFA268",
      },
      spacing:{
        desktop: "100px",
        mobile: "10px"
      },
      animation:{
        fade: 'fade 0.4s ease-in-out',
        slideDown: 'slideDown 1s ease-in-out',
      },
      keyframes:{
        fade: {
          '0%': {scale: 0, opacity:0},
          '100%': {scale: 1, opacity:1}
        },
        slidDown:{
          '0%': {transform: "translateY(-70px)", opacity: 0},
          '100%': {transform: "translateY(0px)", opacity: 1},
        }
      }
    },
  },
  plugins: [],
}
