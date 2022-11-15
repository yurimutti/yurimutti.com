import { styled } from '@/styles';
import { backgroundGradient } from '@/styles/global';

export const Section = styled('section', {
  maxWidth: '1200px',
  margin: '$6 auto',
  flex: 1,
  position: 'relative',
});

export const Text = styled('p', {
  color: '$slate12',
  fontSize: '80px',
  fontWeight: 700,
});

export const HeroGradient = styled('strong', {
  background:
    'linear-gradient(109.6deg,  rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundSize: '400% 400%',
  animation: `${backgroundGradient} 3s ease infinite`,
});
