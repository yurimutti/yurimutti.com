import { styled } from '@/styles';

export const Logo = styled('span', {
  fontSize: 'x-large',
  fontFamily: '$heading',
  fontWeight: 'bold',
  letterSpacing: '2px',
  padding: '$2',
  height: '40px',
  transition: 'all $durations ease',
  borderRadius: '$default',

  '&:hover': {
    backgroundColor: '$slate6',
  },

  '@sm': {
    fontSize: 'medium',
  },
});
