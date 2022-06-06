module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif",
      },
      screens: {
        'mob': '375px',
        'pc': '1440px',
      },
      colors: {
        'primaryDark': 'hsl(234, 12%, 34%)',
        'grayBlue': 'hsl(229, 6%, 66%)',
        'grayLight': 'hsl(0, 0%, 98%)',
        'borderCyan': 'hsl(180, 62%, 55%)',
        'borderRed': 'hsl(0, 78%, 62%)',
        'borderOrange': 'hsl(34, 97%, 64%)',
        'borderBlue': 'hsl(212, 86%, 64%)',

      }
    },
  },
  plugins: [],
}
