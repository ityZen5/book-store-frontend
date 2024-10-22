/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#a5b4fc',
        'secondary' : '#0d842',
        'blackBG' : '#F3F3F3',
        'Favourite': '#FF5841'
      },
      fontFamily :{
        'primary' : ["Montserrat", 'sans-serif'],
        'secondary' :["Nunito Sans", 'sans-serif']
      }
  },
  plugins: [],
  }
}

