import { globalCss, keyframes } from '@/libs/stitches';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: '$body',
    boxSizing: 'border-box',
  },

  'body, html': {
    backgroundColor: '$indigo1',

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

    '.light &': {
      backgroundColor: '$slate12',
      a: {
        color: '$slate1',
      },
    },

    '.dark &': {
      backgroundColor: '$indigo1',
    },
  },
});

export const backgroundGradient = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
});
