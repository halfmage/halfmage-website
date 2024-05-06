const colors = require('tailwindcss/colors')

module.exports = {
  content: ["_site/**/*.html"],
  theme: {
    fontFamily: {
      'sans': ['Plus Jakarta Sans, sans-serif']
    },
    extends: {
      colors: {
        white: '#fff',
        gray: colors.zinc,
      },
    }
  },
  plugins: [],
}