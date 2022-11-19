import { styled } from '@/styles';
import { backgroundGradient } from '@/styles/global';

export const Section = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  position: 'relative',
  textAlign: 'center',
});

export const Text = styled('h1', {
  color: '$slate12',
  fontSize: '80px',
  fontWeight: 700,

  '@sm': {
    fontSize: '32px',
  },
});

export const HeroGradient = styled('strong', {
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundSize: '400% 400%',
  animation: `${backgroundGradient} 4s ease infinite`,
  backgroundImage: 'linear-gradient(109.6deg,  #00dbde  11.2%, #fc00ff 91.1% )',

  variants: {
    gradient: {
      invert: {
        backgroundImage:
          'linear-gradient(109.6deg,  #fc00ff  11.2%, #00dbde 91.1% )',
      },
    },
  },
});
