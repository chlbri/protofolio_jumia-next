const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        500: '#C4C4C4',
        100: '#F3F3F3',
        900: '#4E4E4E',
        700: '#767575',
      },
      poussin: '#FD9C00',
      white: '#FFFFFF',
      transparent: 'transparent',
      red: '#F04A06',
    },
    extend: {
      screens: {
        '2xl': '1600px',
        '3xl': '2000px',
      },
    },
  },
  variants: {
    extend: {
      // animation: ['group-hover', 'responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 8px rgba(4,2,1,0.5)',
        },
      });
    }),
  ],
};
