import { styled } from '@/libs/stitches';
import { backgroundGradient, darkTheme } from '@/libs/stitches/global';

export const Section = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  textAlign: 'center',
  flex: 1,
});

export const Text = styled('h1', {
  color: '$slate12',
  fontSize: '80px',
  fontWeight: 700,

  '@md': {
    fontSize: '48px',
  },

  '@sm': {
    fontSize: '32px',
  },

  [`.${darkTheme} &`]: {
    color: '$slate1',
  },
});

export const HeroGradient = styled('strong', {
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundSize: '400% 400%',
  animation: `${backgroundGradient} 3s ease infinite`,
  backgroundImage:
    'linear-gradient(109.6deg,  rgba(238,58,136,1)  11.2%, rgba(128,162,245,1) 91.1% )',

  variants: {
    gradient: {
      invert: {
        backgroundImage:
          'linear-gradient(109.6deg,  rgba(128,162,245,1)  11.2%, rgba(238,58,136,1) 91.1% )',
      },
    },
  },
});
