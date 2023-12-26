import { Container } from '@/components/layouts/container';
import { Layout } from '@/components/layouts/layout';

import { styled } from '@/libs/stitches';

export const Wrapper = styled('div', {
  margin: '$3 0',
  height: 'calc(100vh - 241px)',
});

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  color: '$slate12',
  h2: {
    marginBottom: '$3',
  },

  '.light &': {
    color: '$slate6',
  },

  '@md': {
    maxWidth: '100%',
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

  '.light &': {
    color: '$slate2',
  },
});

export const Input = styled('input', {
  color: '$slate12',
  background: 'none',
  border: '1px solid $slate12',
  borderRadius: '$default',
  padding: '$2',
  '&:focus': { outline: 'none', borderColor: '$teal8' },

  '.light &': {
    color: '$slate4',
    borderColor: '$slate8',
  },
});

export const Textarea = styled('textarea', {
  color: '$slate12',
  background: 'none',
  border: '1px solid $slate12',
  borderRadius: '$default',
  padding: '$2',
  '&:focus': { outline: 'none', borderColor: '$teal8' },

  '.light &': {
    borderColor: '$slate8',
  },
});

export const Button = styled('button', {
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
  borderColor: '$teal8',
  color: '$teal8',

  '&:hover': {
    background: '$white',
    border: '1px solid $white',
    color: '$slate1',
  },

  '@md': {
    maxWidth: '100%',
  },
});

export const PageTitle = styled('h1', {
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage:
    'linear-gradient(135deg, var(--colors-teal10) 0%, var(--colors-teal2) 100% )',
  fontSize: '48px',
  lineHeight: '50px',
  margin: '$3 0',

  '@md': {
    fontSize: '32px',
    margin: '$1 0',
  },
});

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <PageTitle>Entre em contato comigo.</PageTitle>
          <Form>
            <h2>Envie um email</h2>
            <FormGroup>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" type="text" placeholder="Seu Nome" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seunome@seuemail.com"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                placeholder="Como posso te ajudar?"
                required
                rows={5}
              />
            </FormGroup>
            <FormGroup>
              <Button type="submit">Enviar</Button>
            </FormGroup>
          </Form>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Contact;
