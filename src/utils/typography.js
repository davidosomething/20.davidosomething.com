import Typography from "typography"

const typography = new Typography({
  title: 'davidosomething-2020-mplus',
  baseFontSize: '18px',
  baseLineHeight: '1.8',
  scaleRatio: 1.8,
  googleFonts: [
    {
      name: 'Lexend Deca',
      styles: [
        '400',
      ],
    },
    // {
    //   name: 'M PLUS 1p',
    //   styles: [
    //     //'100', // thin
    //     //'300', // light
    //     '400', // regular
    //     //'500', // medium
    //     //'700', // bold
    //     //'800', // extra-bold
    //     //'900', // black
    //   ],
    // }
  ],
  headerFontFamily: [ 'Lexend Deca', 'sans-serif' ],
  headerWeight: 700,
  //blockMarginBottom: 2 / 3,
  bodyFontFamily: [ 'Lexend Deca', 'sans-serif' ],
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h2: {
      lineHeight: rhythm(1),
    },
    a: {
      textDecoration: 'none',
    },
    li: {
      marginBottom: rhythm(1 / 3),
    },
    'p + pre': {
      marginTop: rhythm(-1 / 2),
    },
    'code,pre': {
      lineHeight: rhythm(2 / 3),
    },
    '.citation': {
      ...scale(-1 / 3),
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
