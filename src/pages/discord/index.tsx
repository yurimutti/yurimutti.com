import { AiOutlineCodepen } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

import { Container } from '@/components/layouts/container';
import { Layout } from '@/components/layouts/layout';

import { styled } from '@/libs/stitches';

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '$3 0',
  height: 'calc(100vh - 241px)',

  '@md': {
    margin: '$1 0',
    display: 'block',
    textAlign: 'center',
  },
});

export const DiscordWrapper = styled('div', {
  fontSize: '24px',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '$bold',
  gap: '$2',

  '.light &': {
    color: '$slate3',
  },

  '@md': {
    margin: '0 auto',
  },
});

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  '@md': {
    gap: '$3',
  },
});

export const Image = styled('div', {
  svg: {
    width: '420px',
    height: '420px',
    color: '$white',
  },

  '.light &': {
    svg: {
      color: '$purple8',
    },
  },

  '@md': {
    display: 'none',
  },
});

export const PageTitle = styled('h1', {
  maxWidth: '600px',
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage:
    'linear-gradient(135deg, var(--colors-purple8) 0%, var(--colors-slate8) 100% )',
  fontSize: '48px',
  lineHeight: '50px',

  '@md': {
    fontSize: '32px',
    lineHeight: '32px',
  },
});

export const Subtitle = styled('h1', {
  maxWidth: '800px',
  color: '$slate10',
  fontWeight: 'lighter',

  '.light &': {
    color: '$slate6',
  },

  '@md': {
    fontSize: 'large',
  },
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
  margin: '$1 0',
  transition: 'all $durations ease',
  maxWidth: '250px',
  '&:hover': {
    background: 'transparent',
    borderColor: '$purple8',
    color: '$purple8',
  },
  '&:focus': {
    background: 'transparent',
    borderColor: '$purple8',
    color: '$purple8',
    outline: 'none',
  },

  '@md': {
    margin: '0 auto',
  },
});

const Discord = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Info>
            <DiscordWrapper>
              <FaDiscord />
              <span>Discord</span>
            </DiscordWrapper>
            <PageTitle>Faça amigos em nosso servidor de discord.</PageTitle>
            <Subtitle>
              Programadores de vários níveis e lugares para uma troca de
              experiências e conhecimento.
            </Subtitle>
            <Button href={process.env.NEXT_PUBLIC_DISCORD_URL} target="_blank">
              Entrar no Discord
            </Button>
          </Info>

          <Image>
            <AiOutlineCodepen />
          </Image>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default Discord;
