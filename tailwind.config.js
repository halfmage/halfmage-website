const colors = require('tailwindcss/colors')

module.exports = {
  content: ["_site/**/*.html"],
  theme: {
    colors: {
      white: '#fff',
      gray: colors.zinc,
    },
  },
  plugins: [],
}