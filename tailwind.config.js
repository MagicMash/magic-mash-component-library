module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'lightBlue': '#D2E4FD',
        'defaultBlue': '#27ABEB',
        'darkBlue': '#102041',
        'lightGreen': '#CDE9D6',
        'darkGreen': '#025E73',
        'brown': '#F2C979',
        'lightYellow': '#FFF1CB',
        'lightPink': '#F8D3CF',
        'danger': '#DA4E4F'
      }
    },
    fontFamily: {
      text: ['Roboto', 'sans-serif'],
      header: ['Lato', 'sans-serif']
    },
    dropShadow: {
      '3xl': '5px -3px 6px rgba(0, 0, 0, 0.3)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
