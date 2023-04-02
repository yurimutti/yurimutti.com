import { styled } from '@/styles';
import { darkTheme } from '@/styles/global';

export const Footer = styled('footer', {
  color: '$slate12',
  borderTop: '1px solid $slate6',

  span: {
    fontSize: 'small',
  },

  [`.${darkTheme} &`]: {
    color: '$slate1',
  },
});

export const Container = styled('div', {
  padding: '$3 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
});
