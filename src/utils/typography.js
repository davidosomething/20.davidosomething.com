import Typography from "typography"
import styles from '../styles/variables.css';

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
    'h2,h3,h4,h5,h6': {
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1 / 2),
    },
    h4: {
      color: styles.off1,
    },
    a: {
      color: styles.link,
      textDecoration: 'none',
    },
    'a:hover, a:active': {
      color: styles.linkHover,
    },
    li: {
      marginBottom: rhythm(1 / 3),
    },
    '.citation': {
      ...scale(-1 / 3),
    },
    '.gatsby-highlight': {
      marginBottom: rhythm(1),
    },
    'p ~ .gatsby-highlight': {
      marginTop: rhythm(-0.5),
    },
    ':not(pre) > code[class*="language-"]': {
      ...scale(-1 / 2),
    },
    '.gatsby-highlight > pre[class*="language-"]': {
      padding: `${rhythm(0.2)} ${rhythm(0.5)}`,
      lineHeight: 1.2,
    },
    '.gatsby-highlight > pre[class*="language-"] > code[class*="language-"]': {
      ...scale(-2 / 3),
      lineHeight: 'inherit',
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
