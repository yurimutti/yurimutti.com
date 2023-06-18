import { AiOutlineCodepen } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

import { Container } from '@/components/layouts/container';
import { Layout } from '@/components/layouts/layout';

import * as S from './styles';

const Discord = () => {
  return (
    <Layout>
      <Container>
        <S.Wrapper>
          <S.Info>
            <S.Discord>
              <FaDiscord />
              <span>Discord</span>
            </S.Discord>
            <S.PageTitle>Faça amigos em nosso servidor de discord.</S.PageTitle>
            <S.Subtitle>
              Programadores de vários níveis e lugares para haver uma troca de
              experiências e conhecimentos.
            </S.Subtitle>
            <S.Button href="##">Entrar no Discord</S.Button>
          </S.Info>

          <S.Image>
            <AiOutlineCodepen />
          </S.Image>
        </S.Wrapper>
      </Container>
    </Layout>
  );
};

export default Discord;
