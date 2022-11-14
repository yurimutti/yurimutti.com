import { styled } from '@/styles';

export const Content = styled('span', {
  fontSize: 'x-large',
  fontFamily: '$heading',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  padding: '$2',
  height: '40px',
  transition: 'all $durations ease-in-out',
  borderRadius: '$default',

  '&:hover': {
    backgroundColor: '$slate6',
  },
});
