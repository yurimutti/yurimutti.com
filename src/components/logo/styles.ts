import { styled } from '@/libs/stitches';

export const Logo = styled('span', {
  color: '$slate1',
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
    color: '$slate12',
  },

  '@sm': {
    fontSize: 'medium',
  },

  '.dark &': {
    color: '$slate12',
  },
});
