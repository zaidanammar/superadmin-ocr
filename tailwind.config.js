module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        biru: '#0036A0',
        abuabu: '#A8A8A8',
        hijauTosca: '#59D185',
        softPink: '#FD8C8C'
      },
      fontSize: {
        xxs: '10px'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
