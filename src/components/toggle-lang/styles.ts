import { motion } from 'framer-motion';

import { styled } from '@/styles';

export const ToggleLang = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  backgroundColor: 'transparent',
  border: 'none',
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

  '@sm': {
    border: '1px solid $slate12',
  },
});

export const LangModal = styled(motion.div, {
  backgroundColor: '$slate12',
  width: '100vw',
  position: 'fixed',
  inset: '0',
  top: '90px',
  zIndex: '$modal',
});

export const Container = styled('div', {
  position: 'relative',
  padding: '$10 $4 0 $4',
});

export const LangTitle = styled('h2', {
  fontSize: 'xx-large',
});

export const CloseButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  position: 'absolute',
  top: '$10',
  right: '$4',
  borderRadius: '50%',
  width: '$5',
  height: '$5',
  transition: 'all $durations ease',

  '&:hover': {
    backgroundColor: '$slate11',
  },

  svg: {
    width: '$4',
    height: '$4',
  },
});

export const Languages = styled('div', {
  marginTop: '$5',
});

export const LanguagesList = styled('ul', {
  display: 'flex',
  gap: '$6',
  fontWeight: '700',
});

export const Language = styled('li', {
  cursor: 'pointer',
  padding: '$4',
  transition: 'all $durations ease',
  borderRadius: '$default',
  minWidth: '250px',

  '&:hover': {
    backgroundColor: '$slate11',
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: '$slate11',
      },
    },
  },
});
