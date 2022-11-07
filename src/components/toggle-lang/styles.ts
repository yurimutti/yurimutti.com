import { styled } from '@/styles';

export const Lang = styled('div', {
  alignItems: 'center',
  border: '2px solid $slate10',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  justifyContent: 'center',
  color: '$white',
  borderRadius: '50%',
  width: '$8',
  height: '$8',
  '&:hover': {
    borderColor: '$white',
  },
});
