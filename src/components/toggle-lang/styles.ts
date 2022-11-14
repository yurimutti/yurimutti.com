import { styled } from '@/styles';

export const Lang = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$slate12',
  padding: '$2',
  height: '40px',
  transition: 'all $durations ease-in-out',
  borderRadius: '$default',

  svg: {
    color: '$slate12',
    width: '$4',
    height: '$4',
  },

  '&:hover': {
    backgroundColor: '$slate6',
  },
});
