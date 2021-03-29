import Typography from 'typography';
import {
  MOBILE_MEDIA_QUERY,
  DEFAULT_MEDIA_QUERY,
} from 'typography-breakpoint-constants';

const typography = new Typography({
  title: 'davidosomething-2020-mplus',
  baseFontSize: '22px',
  baseLineHeight: '1.8',
  scaleRatio: 1.8,
  omitGoogleFont: true,
  headerFontFamily: [ 'Lexend Deca', 'sans-serif' ],
  headerWeight: 700,
  //blockMarginBottom: 2 / 3,
  bodyFontFamily: [ 'Lexend Deca', 'sans-serif' ],
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1 a, h2 a, h3 a': {
      textDecoration: 'none',
    },
    h2: {
      lineHeight: rhythm(1),
    },
    '.page--title': {
      ...scale(1.25),
      marginBottom: rhythm(0.2),
      wordBreak: 'keep-all',
    },
    a: {
      textDecoration: 'none',
    },
    'article section a': {
      textDecoration: 'underline',
      textDecorationSkip: 'ink',
      textUnderlinePosition: 'under',
    },
    li: {
      marginBottom: rhythm(1 / 3),
    },
    'p + pre': {
      marginTop: rhythm(-1 / 2),
    },
    'p > small': {
      display: 'block',
      lineHeight: '1.5',
    },
    'code,pre': {
      lineHeight: rhythm(2 / 3),
    },
    '.citation': {
      ...scale(-1 / 3),
    },
    [MOBILE_MEDIA_QUERY]: {
      '.post--title': {
        ...scale(0.5),
      }
    },
    [DEFAULT_MEDIA_QUERY]: {
      html: {
        ...adjustFontSizeTo('100%'),
      },
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
