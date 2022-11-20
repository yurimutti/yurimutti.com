import { styled } from '@/styles';

export const Theme = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

  '@md': {
    border: '1px solid $slate12',
  },
});

export const ThemeInfo = styled('span', {
  display: 'none',

  '@md': {
    display: 'inline-block',
  },
});
