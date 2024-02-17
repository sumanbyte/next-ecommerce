/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['Montserrat', 'sans-serif'],
        "merriweather": ['Merriweather', 'serif'],
        "comfortaa": ['Comfortaa', 'cursive'],
        "chakrapetch": ['Chakra Petch', 'sans-serif'],
      },
      height: {
        mobileNav: 'calc(100vh - 3.5rem)',
      }
    },
    colors: {
      ...require('tailwindcss/colors'),
      primary: {
        100: '#F5F3FF',
        200: '#DACBFF',
        300: '#BFA3FF',
        400: '#A079FF',
        500: '#8751FF',
        600: '#6537FF',
        700: '#4723E2',
        800: '#3117B3',
        900: '#1E0F8D',
      },
      secondary: {
        100: '#E5F7F1',
        200: '#C1EDDF',
        300: '#99E0CC',
        400: '#72D1B8',
        500: '#4FBEA4',
        600: '#34A38F',
        700: '#1F8873',
        800: '#126057',
        900: '#0A483F',
      },
      accent: {
        100: '#FFF5E5',
        200: '#FFD2B6',
        300: '#FFAD85',
        400: '#FF8960',
        500: '#FF652B',
        600: '#E04311',
        700: '#B5280B',
        800: '#8E160C',
        900: '#71110A',
      },
    },
  },
  plugins: [
   require('@tailwindcss/forms')
  ],

}

