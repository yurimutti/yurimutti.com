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
import { createStitches } from '@stitches/react';

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
      ...slate,
      ...indigo,
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
  },
});

export const darkTheme = createTheme({
  colors: {
    ...indigoDark,
    ...slateDark,
  },
});
