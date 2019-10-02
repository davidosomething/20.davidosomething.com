import Typography from "typography"

const typography = new Typography({
  title: 'davidosomething-2020-mplus',
  baseFontSize: '18px',
  baseLineHeight: '1.6',
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
  headerWeight: 400,
  bodyFontFamily: [ 'Lexend Deca', 'sans-serif' ],
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: '#49a',
      textDecoration: 'none',
    },
    'a:hover, a:active': {
      color: '#ace',
    },
    '.gatsby-highlight': {
      marginBottom: rhythm(1),
    },
    'p ~ .gatsby-highlight': {
      marginTop: rhythm(-0.5),
    },
    '.gatsby-highlight > pre[class*="language-"]': {
      marginBottom: 0,
      marginTop: 0,
      padding: `${rhythm(0.2)} ${rhythm(0.5)}`,
    },
    '.gatsby-highlight > pre[class*="language-"] > code[class*="language-"]': {
      ...scale(-1 / 2),
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
