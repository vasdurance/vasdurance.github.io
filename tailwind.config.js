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
      animation: {
        'slide-in': 'slide-in 200ms ease-out 2s 1 normal forwards running'
      },
      fontFamily: {
        sans: ['Nunito', ...fontFamily.sans],
        handwriting: ['Caveat', 'Nunito', ...fontFamily.sans]
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': {transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: []
}
