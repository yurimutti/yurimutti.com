import {
  slate,
  slateDark,
  indigo,
  indigoDark,
  red,
  teal,
  yellow,
  pink,
  blue,
  purple,
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
      white: '#FFFFFF',
      black: '#000000',
      hover: 'hsla(0,0%,100%,.02)',
      ...slateDark,
      ...indigoDark,
      ...red,
      ...teal,
      ...yellow,
      ...blue,
      ...pink,
      ...purple,
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
    fonts: {
      body: 'Inter, sans-serif',
      heading: 'Source Sans Pro, sans-serif',
    },
    transitions: {
      durations: '0.2s',
    },
    radii: {
      default: '8px',
    },
    zIndices: {
      dropdown: 1000,
      sticky: 1020,
      fixed: 1030,
      modal: 1060,
      popover: 1070,
      tooltip: 1080,
      max: '9999',
    },
  },
  media: {
    xs: '(max-width: 576px)',
    sm: '(max-width: 768px)',
    md: '(max-width: 992px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1200px)',
    xxl: '(min-width: 1400px)',
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
