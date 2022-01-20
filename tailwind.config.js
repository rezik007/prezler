module.exports = {
  content: ["./src/**/*{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'serif'],
      'satoshi': ['Satoshi', 'serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
