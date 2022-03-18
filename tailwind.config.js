const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        solPurple: '#9945FF',
        solGreen: '#14F195',
      },
    },
  },
  plugins: [],
};
