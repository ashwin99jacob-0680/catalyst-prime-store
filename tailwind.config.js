/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          dark: '#131921',
          light_dark: '#232f3e',
          yellow: '#febd69',
          yellow_hover: '#f3a847',
          orange: '#e47911',
          blue_light: '#007185',
          link: '#007185',
          gray_bg: '#eaeded',
          prime_blue: '#00a8e1'
        }
      }
    },
  },
  plugins: [],
}
