import { styled } from '@/libs/stitches';

export const PageTitle = styled('h1', {
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage:
    'linear-gradient(135deg, var(--colors-purple8) 0%, var(--colors-purple12) 100% )',
  fontSize: '48px',
  lineHeight: '50px',
  margin: '$3 0',
});

export const AboutMe = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$3',
});

export const AboutMeImage = styled('div', {
  img: {
    borderRadius: '$default',
  },
});

export const AboutMeText = styled('div', {
  color: '$slate9',
  maxWidth: '500px',
  h2: {
    fontSize: '32px',
  },

  h3: {
    marginTop: '$1',
    fontWeight: 'lighter',
  },

  p: {
    color: '$slate9',
    maxWidth: '600px',
    marginBottom: '$3',
  },
});

export const Carreer = styled('div', {
  h3: {
    color: '$slate12',
    marginBottom: '$3',
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
  transition: 'all $durations ease',
  border: '1px solid',
  borderColor: '$slate6',
  marginBottom: '$4',
  background: 'transparent',

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
    borderColor: '$slate8',
    background: '$hover',
  },
});
