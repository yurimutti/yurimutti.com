import { styled } from '@/libs/stitches';

export const Ellipses = styled('div', {
  inset: '0px',
  position: 'absolute',
  zIndex: -1,
  background:
    'radial-gradient(circle at 15% 50%, rgba(238, 58, 136, 0.1) , rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, rgba(128, 162, 245, 0.2), rgba(255, 255, 255, 0) 25%)',
});
