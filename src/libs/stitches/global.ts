import { globalCss, createTheme, keyframes } from '@/libs/stitches';

export const darkTheme = createTheme({});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: '$body',
    boxSizing: 'border-box',
  },

  'body, html': {
    background: '$indigo1',

    a: {
      color: '$slate12',
      textDecoration: 'none',
    },

    img: {
      maxWidth: '100%',
    },

    ul: {
      listStyle: 'none',
    },

    button: {
      cursor: 'pointer',
    },

    'h1,h2,h3,h4,h5,h6': {
      fontFamily: '$heading',
    },

    [`.${darkTheme} &`]: {
      backgroundColor: '$slate12',
    },
  },
});

export const backgroundGradient = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
});
