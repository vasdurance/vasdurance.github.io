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
      animation: {
        'slide-in': 'slide-in 600ms ease-out 2s 1 normal forwards running'
      },
      fontFamily: {
        sans: ['Nunito', ...fontFamily.sans]
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(200%)' },
          '100%': {transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: []
}
