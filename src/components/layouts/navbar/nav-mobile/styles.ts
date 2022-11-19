import { motion } from 'framer-motion';

import { styled } from '@/styles';

export const NavMobile = styled('div', {
  display: 'none',
  border: 'none',
  background: 'transparent',

  svg: {
    color: '$slate12',
    width: '$4',
    height: '$4',
  },

  '.openNavMobile': {
    border: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
  },

  '@sm': {
    display: 'flex',
  },
});

export const NavMobileOverlay = styled(motion.div, {
  position: 'fixed',
  inset: 0,
  zIndex: 2,
  backgroundColor: '$indigo1',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',

  nav: {
    color: '$slate12',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '$6',

    ul: {
      display: 'flex',
      flexDirection: 'column',
      gap: '$3',
    },
  },

  '.closeNavMobile': {
    position: 'absolute',
    top: '$4',
    right: '$4',
    border: 'none',
    backgroundColor: 'transparent',
  },
});
