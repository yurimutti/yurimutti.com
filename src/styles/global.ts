import { globalCss } from '@/styles';

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
  },
});
