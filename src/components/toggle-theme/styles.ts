import { styled } from '@/styles';

export const Theme = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: '2px solid $slate10',
  backgroundColor: 'transparent',
  borderRadius: '50%',
  width: '$8',
  height: '$8',
  '&:hover': {
    borderColor: '$white',
  },

  svg: {
    color: '$slate12',
    width: '$4',
    height: '$4',
  },
});
