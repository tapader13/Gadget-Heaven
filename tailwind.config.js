/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9538E2',
        secondary: '#FFFFFF',
        tertiary: '#09080F',
      },
    },
  },
  plugins: [],
};
