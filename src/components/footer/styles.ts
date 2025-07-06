import { motion } from 'framer-motion';

import { styled } from '@/libs/stitches';

export const Header = styled('header', {
  padding: '$4 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const ButtonLogo = styled('div', {
  cursor: 'pointer',
});

export const Nav = styled('nav', {
  '@md': {
    display: 'none',
  },
});

export const List = styled(motion.ul, {
  display: 'flex',
  gap: '$6',
});

export const ListItem = styled('li', {
  'a:hover': {
    color: '$slate12',
  },
});

export const Anchor = styled(motion.div, {
  position: 'relative',
  height: '40px',
  zIndex: 1,
  padding: '$2',
  color: '$slate1',
  cursor: 'pointer',

  '.dark &': {
    color: '$slate12',
  },
});

export const NavHovered = styled(motion.span, {
  position: 'absolute',
  inset: 0,
  backgroundColor: '$slate6',
  borderRadius: '$default',
  zIndex: -1,
});

export const ToggleArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',

  '@md': {
    display: 'none',
  },
});
