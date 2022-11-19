import { motion } from 'framer-motion';

import { styled } from '@/styles';

export const Container = styled('div', {
  width: '100%',
  padding: '0 $4',
});

export const Header = styled('header', {
  padding: '$4 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const ButtonLogo = styled('a', {
  cursor: 'pointer',
});

export const Nav = styled('nav', {
  '@sm': {
    display: 'none',
  },
});

export const List = styled(motion.ul, {
  display: 'flex',
  gap: '$6',
});

export const ListItem = styled('li', {});

export const Anchor = styled(motion.a, {
  position: 'relative',
  height: '40px',
  zIndex: 1,
  padding: '$2',
  color: '$slate12',
  cursor: 'pointer',
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

  '@sm': {
    display: 'none',
  },
});
