/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

