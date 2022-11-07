import { motion } from 'framer-motion';

import { styled } from '@/styles';

export const Header = styled('header', {
  padding: '$4 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',

  '@xs': {
    padding: '$2 0',
  },
});

export const Container = styled('div', {
  maxWidth: '95%',
  margin: '0 auto',
});

export const ButtonLogo = styled('a', { cursor: 'pointer' });

export const Nav = styled('nav', {});

export const List = styled('ul', {
  display: 'flex',
  listStyle: 'none',
  gap: '$6',

  '@xs': {
    gap: '$3',
  },
});

export const ListItem = styled('li', {});

export const Anchor = styled(motion.a, {
  color: '$slate11',
  position: 'relative',
  height: '40px',
  borderRadius: '$default',
  padding: '$2',

  '&:hover': {
    backgroundColor: '$slate5',
    color: '$slate12',
  },
});

export const NavHovered = styled(motion.span, {});

export const ToggleArea = styled('div', {
  display: 'flex',
  gap: '$6',

  '@xs': {
    gap: '$3',
  },
});
