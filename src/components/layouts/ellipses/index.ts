import { styled } from '@/styles';

export const Ellipses = styled('div', {
  inset: '0px',
  position: 'absolute',
  zIndex: -1,
  background:
    'radial-gradient(circle at 15% 50%, rgba(252, 0, 255, 0.1) , rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, rgba(0, 219, 222, 0.2), rgba(255, 255, 255, 0) 25%)',
});
