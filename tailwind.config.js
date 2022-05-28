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
    screens: {
      'sm': '600px',
      'lg': '1024px'
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...fontFamily.sans]
      }
    }
  },
  plugins: []
}
