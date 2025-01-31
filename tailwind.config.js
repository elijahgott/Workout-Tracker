/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/*.html',
    './build/workouts/*.html',
    './build/profile/*.html',
    './build/signin/*.html'],
  theme: {
    extend: {
      keyframes: {
        "fade-in-left": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(-100%, 0, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
        "fade-out-left": {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translate3d(-100%, 0, 0)",
                    },
                },
      },
      animation: {
        fadeInLeft: 'fade-in-left 1s ease-in-out 0.25s 1',
        fadeOutLeft: 'fade-out-left 1s ease-in-out 0.25s 1',
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
plugins: [],
}