import { styled } from '@/styles';

export const Logo = styled('span', {
  color: '$slate12',
  fontSize: 'x-large',
  fontFamily: '$heading',
  fontWeight: 'bold',
  letterSpacing: '2px',
  padding: '$2',
  height: '40px',
  transition: 'all $durations ease',
  borderRadius: '$default',
  textTransform: 'uppercase',

  '&:hover': {
    backgroundColor: '$slate6',
  },

  '@sm': {
    fontSize: 'medium',
  },
});
