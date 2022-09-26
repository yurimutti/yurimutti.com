import { styled } from '@/styles';

export const Theme = styled('button', {
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',

  svg: {
    color: '$slate12',
    width: '$3',
    height: '$3',
  },
});
