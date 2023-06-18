import { styled } from '@/libs/stitches';

export const PageTitle = styled('h1', {
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage:
    'linear-gradient(135deg, var(--colors-indigo4) 0%, var(--colors-indigo12) 100% )',
  fontSize: '48px',
  lineHeight: '50px',
  marginBottom: '$3',
});

export const Projects = styled('div', {
  color: '$white',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginBottom: '$4',

  ul: {
    listStyleType: 'circle',
    marginLeft: '$6',
  },

  a: {
    textDecoration: 'underline',
  },
});
