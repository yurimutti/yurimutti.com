import { styled } from '@/libs/stitches';

export const Footer = styled('footer', {
  color: '$slate1',
  borderTop: '1px solid $slate6',

  span: {
    fontSize: 'small',
  },

  '.dark &': {
    color: '$slate12',
  },
});

export const Container = styled('div', {
  padding: '$3 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
});
