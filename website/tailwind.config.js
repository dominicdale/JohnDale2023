/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', 
            './_src/js/*.js'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['Playfair Display', 'serif']
    }
  },
  plugins: [],
}

