import { styled } from '@/styles';

export const Header = styled('header', {
  color: '$slate12',
  padding: '$4 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@md': {
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

  '@md': {
    gap: '$3',
  },
});

export const ListItem = styled('li', {});

export const Anchor = styled('a', {});

export const ToggleArea = styled('div', {
  display: 'flex',
  gap: '$3',
});
