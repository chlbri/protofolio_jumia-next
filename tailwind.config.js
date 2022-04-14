module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
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
  plugins: [],
};
