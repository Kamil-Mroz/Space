/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      base: '1.125rem',
      md: '1.75rem',
      xl: '2rem',
      '2xl': '3.5rem',
      '3xl': '6.25rem',
      '4xl': '9.375rem',
    },
    colors: {
      transparent: 'transparent',
      light: '#ffffff',
      dark: '#0B0D17',
      accent: '#D0D6F9',
    },
    fontFamily: {
      sans: ['Barlow Condensed', 'sans-serif'],
      serif: ['Bellefair', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
