/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,html,js,ts,jsx, tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#006688',
        secondary: '#004E71'
      },
      red: {
        100: '#FFEEEE',
        200: '#FACDCD',
        300: '#F29B9B'
        // Add more shades of red if needed
      }
    },

    container: {
      padding: '2rem',
      center: true
    },

    screens: {
      sm: '640px',
      md: '768px'
    }
  },
  plugins: []
}
