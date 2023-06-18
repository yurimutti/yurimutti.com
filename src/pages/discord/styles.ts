import { styled } from '@/libs/stitches';

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '$3 0',
});

export const Discord = styled('div', {
  fontSize: '24px',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '$bold',
  gap: '$2',
});

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

export const Image = styled('div', {
  svg: {
    width: '420px',
    height: '420px',
    color: '$white',
  },
});

export const PageTitle = styled('h1', {
  maxWidth: '600px',
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage:
    'linear-gradient(135deg, var(--colors-teal10) 0%, var(--colors-teal2) 100% )',
  fontSize: '48px',
  lineHeight: '50px',
});

export const Subtitle = styled('h1', {
  maxWidth: '800px',
  color: '$slate10',
  fontWeight: 'lighter',
});

export const Button = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  textTransform: 'uppercase',
  color: '$slate1',
  background: '$white',
  border: '1px solid $white',
  borderRadius: '32px',
  cursor: 'pointer',
  padding: '16px',
  transition: 'all 0.2s ease-in-out',
  maxWidth: '250px',
  '&:hover': {
    background: 'transparent',
    borderColor: '$teal10',
    color: '$teal10',
  },
  '&:focus': {
    background: 'transparent',
    borderColor: '$teal10',
    color: '$teal10',
    outline: 'none',
  },
});
