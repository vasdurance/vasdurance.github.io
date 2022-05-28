const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...fontFamily.sans]
      }
    }
  },
  plugins: []
}
