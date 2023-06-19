import { styled } from '@/libs/stitches';

export const PageTitle = styled('h1', {
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage:
    'linear-gradient(135deg, var(--colors-purple8) 0%, var(--colors-purple12) 100% )',
  fontSize: '48px',
  lineHeight: '50px',
  marginBottom: '$3',
});

export const AboutMe = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const AboutMeInfo = styled('div', {
  color: '$slate12',

  h2: {
    fontSize: '32px',
  },

  h3: {
    fontWeight: 'lighter',
  },

  p: {
    color: '$slate9',
    maxWidth: '400px',
  },
});

export const AboutMeText = styled('div', {
  color: '$slate9',
  maxWidth: '500px',
});

export const Carreer = styled('div', {
  h3: {
    color: '$slate12',
    marginBottom: '$2',
  },
});

export const CarreerList = styled('ul', {
  marginBottom: '$3',
  displayFlex: 'column',
  gap: '$2',
});

export const CarreerItem = styled('li', {
  borderRadius: '$default',
  padding: '$3',
  border: '1px solid',
  borderColor: 'transparent',
  transition: 'all $durations ease',

  a: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '$4',
    color: '$slate9',
  },

  h3: {
    color: '$slate12',
  },

  '&:hover': {
    border: '1px solid $slate6',
  },
});
