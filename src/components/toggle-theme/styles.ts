import { motion } from 'framer-motion';

import { styled } from '@/libs/stitches';
import { darkTheme } from '@/libs/stitches/global';

export const Theme = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$slate12',
  padding: '$2',
  height: '40px',
  transition: 'all $durations ease',
  borderRadius: '$default',

  svg: {
    color: '$slate12',
    width: '$4',
    height: '$4',
  },

  '&:hover': {
    backgroundColor: '$slate6',
  },

  '@md': {
    border: '1px solid $slate12',
  },

  [`.${darkTheme} &`]: {
    svg: {
      color: '$slate1',
    },
  },
});

export const ToggleButton = styled(motion.button, {
  backgroundColor: 'transparent',
  border: 'none',
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
});
