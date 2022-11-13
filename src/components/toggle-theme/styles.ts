import { styled } from '@/styles';

export const Theme = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  width: '$8',
  height: '$8',
  border: 'none',

  svg: {
    color: '$slate12',
    width: '$4',
    height: '$4',
  },
});
