import { styled } from '@/styles';

export const Footer = styled('footer', {
  color: '$slate12',
  borderTop: '1px solid $slate6',

  span: {
    fontSize: 'small',
  },
});

export const Container = styled('div', {
  maxWidth: '95%',
  margin: '0 auto',
  padding: '$3 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
});
