const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    colors: {
      gray: colors.neutral,
    },
    extend: {},
  },
  plugins: [],
}

