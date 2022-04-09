module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      'highlight-0': '#ffebce',
      'highlight-light': '#F6D8A7',
      highlight: '#EDAE49',
      'grey-1': '#F1F1F2',
      'grey-5': '#C2C7CE',
      'grey-7': '#7A8089',
      'grey-9': '#202124',
      'yellow-light': '#FADBAC',
      yellow: '#f5b759',
      green: '#99F997',
      'green-dark': '#0A7908',
      pink: '#F6A4C5',
      blue: '#7AF2F4',
      violet: '#B7B6FF',
      red: '#F37979',
      'red-dark': '#F37979'
    },
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      padding: ['last'],
      margin: ['last'],
    }
  },
}