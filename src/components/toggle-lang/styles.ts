import { styled } from '@/styles';

export const Lang = styled('button', {
  color: '$slate12',
  width: '$6',
  height: '$6',
  display: 'flex',
  border: 'none',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',

  ':first-child': {
    '&:after': {
      content: '',
      width: '$2',
      display: 'block',
      height: '0.0625rem',
      backgroundColor: '$slate11',
      margin: '0 auto',
    },
  },
});
