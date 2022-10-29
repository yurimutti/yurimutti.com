import { styled } from '@/styles';

export const Lang = styled('div', {
  display: 'flex',
  border: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
  gap: '$2',

  svg: {
    borderRadius: '$default',
    width: '$4',
    height: '$4',
  },
});
