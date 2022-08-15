/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#222222',
      gray: {
        200: '#E2E2E2',
        300: '#737373',
      },
      rose: {
        700: '#AE0A33',
        600: '#E00D42',
      },
      blue: {
        100: '#9FD5FC',
        600: '#0068B8',
        800: '#003054',
        900: '#004070',
      },
    },
    plugins: [],
  },
};
