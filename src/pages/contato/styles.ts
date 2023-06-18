import { styled } from '@/libs/stitches';

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  color: '$slate12',
  h2: {
    marginBottom: '$3',
  },
});

export const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$3',
  gap: '$3',
});

export const Label = styled('label', {
  color: '$slate12',
  textTransform: 'uppercase',
  fontSize: '12px',
  fontWeight: '500',
});

export const Input = styled('input', {
  color: '$slate12',
  background: 'none',
  border: '1px solid $slate12',
  borderRadius: '$default',
  padding: '$2',
  '&:focus': { outline: 'none', borderColor: '$pink8' },
});

export const Textarea = styled('textarea', {
  color: '$slate12',
  background: 'none',
  border: '1px solid $slate12',
  borderRadius: '$default',
  padding: '$2',
  '&:focus': { outline: 'none', borderColor: '$pink8' },
});

export const Button = styled('button', {
  textTransform: 'uppercase',
  color: '$slate1',
  background: '$white',
  border: '1px solid $white',
  borderRadius: '$default',
  cursor: 'pointer',
  padding: '16px',
  marginTop: '4px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    background: 'transparent',
    borderColor: '$pink8',
    color: '$pink8',
  },
  '&:focus': {
    background: 'transparent',
    borderColor: '$pink8',
    color: '$pink8',
    outline: 'none',
  },
});

export const Telephone = styled('a', {
  maxWidth: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$3',
  margin: '$4 0',
  backgroundColor: '$indigo1',
  border: '1px solid $white',
  borderRadius: '$default',
  transition: 'all 0.2s ease-in-out',
  background: 'transparent',
  borderColor: '$pink8',
  color: '$pink8',

  '&:hover': {
    background: '$white',
    border: '1px solid $white',
    color: '$slate1',
  },
});

export const TelephoneNumber = styled('div', {
  a: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$2',
  },
});

export const PageTitle = styled('h1', {
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage:
    'linear-gradient(135deg, var(--colors-pink8) 0%, var(--colors-slate8) 100% )',
  fontSize: '48px',
  lineHeight: '50px',
  margin: '$4 0',
});
