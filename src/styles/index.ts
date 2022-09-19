import {
  slate,
  slateDark,
  indigo,
  indigoDark,
  red,
  teal,
  yellow,
  blue,
} from '@radix-ui/colors';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...slateDark,
      ...indigoDark,
      ...red,
      ...teal,
      ...yellow,
      ...blue,
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '40px',
      7: '48px',
      8: '56px',
      9: '64px',
      10: '72px',
      11: '80px',
    },
    media: {
      bp1: '(max-width: 576px)',
      bp2: '(max-width: 768px)',
      bp3: '(max-width: 992px)',
      bp4: '(max-width: 1024px)',
      bp5: '(max-width: 1200px)',
      bp6: '(min-width: 1400px)',
    },
    fonts: {
      body: 'Inter, sans-serif',
      heading: 'Source Sans Pro, sans-serif',
    },
    transitions: {
      durations: '0.2s',
    },
    radii: {
      borderRadius: '8px',
    },
  },
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
});

export const lightTheme = createTheme({
  colors: {
    ...indigo,
    ...slate,
  },
});

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, fontFamily: '$body' },
  'body, html': {
    background: '$indigo1',
    a: {
      color: '$slate12',
      textDecoration: 'none',
    },
    img: {
      maxWidth: '100%',
    },
  },
});

globalStyles();
