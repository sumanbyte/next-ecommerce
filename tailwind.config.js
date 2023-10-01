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
    }
  },
  plugins: [],

}

