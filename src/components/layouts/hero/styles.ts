import { styled } from '@/styles';
import { backgroundGradient } from '@/styles/global';

export const Section = styled('section', {
  maxWidth: '1200px',
  margin: '$6 auto',
});

export const Text = styled('p', {
  color: '$slate12',
  fontSize: '80px',
  fontWeight: 700,
});

export const HeroGradient = styled('strong', {
  background: 'linear-gradient(-45deg,#21D4FD,#B721FF 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundSize: '400% 400%',
  animation: `${backgroundGradient} 3s ease infinite`,
});
