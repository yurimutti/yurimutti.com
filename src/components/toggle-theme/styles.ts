import { styled } from '@/libs/stitches';

export const Theme = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$slate12',
  padding: '$2',
  height: '40px',
  transition: 'all $durations ease',
  borderRadius: '$default',

  backgroundColor: 'transparent',
  border: 'none',
  gap: '$2',

  svg: {
    color: '$slate1',
    width: '$4',
    height: '$4',
  },

  '&:hover': {
    backgroundColor: '$slate6',

    svg: {
      color: '$slate12',
    },
  },

  '@md': {
    border: '1px solid $slate12',

    '.light &': {
      border: '1px solid $slate1',
    },
  },

  '.dark &': {
    svg: {
      color: '$slate12',
    },
  },
});
