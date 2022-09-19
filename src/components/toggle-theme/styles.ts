import { styled } from '@/styles';

export const Theme = styled('button', {
  width: '$6',
  height: '$6',
  borderRadius: '$borderRadius',
  border: '1px solid $slate12',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  svg: {
    color: '$slate12',
  },
});
