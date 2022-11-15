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
  },

  '@sm': {
    display: 'flex',
    alignItems: 'center',
  },
});

export const NavMobileOverlay = styled(motion.div, {
  position: 'fixed',
  inset: 0,
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
    top: '$3',
    right: '$3',
    border: 'none',
    backgroundColor: 'transparent',
  },
});