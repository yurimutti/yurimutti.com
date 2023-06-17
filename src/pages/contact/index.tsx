import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

import { Container } from '@/components/layouts/container';
import { Layout } from '@/components/layouts/layout';

import * as S from './styles';

const Contact = () => {
  return (
    <Layout>
      <Container>
        <S.PageTitle>Entre em contato comigo.</S.PageTitle>

        <S.Form>
          <h2>Envie um email</h2>
          <S.FormGroup>
            <S.Label htmlFor="name">Nome</S.Label>
            <S.Input id="name" type="text" placeholder="Sou Nome" required />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              id="email"
              type="email"
              placeholder="seunome@seuemail.com"
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="message">Mensagem</S.Label>
            <S.Textarea
              id="message"
              placeholder="Como posso te ajudar?"
              required
              rows={5}
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Button type="submit">Enviar</S.Button>
          </S.FormGroup>
        </S.Form>

        <S.ContactInfos>
          <S.ContactInfo>
            <a
              href="mailto:contato@yurimutti.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail /> contato@yurimutti.com
            </a>
          </S.ContactInfo>
          <S.ContactInfo>
            <a
              href="https://api.whatsapp.com/send?phone=557131904989"
              target="_blank"
              rel="noreferrer"
            >
              <BsTelephone /> +55 71 3190-4989
            </a>
          </S.ContactInfo>
        </S.ContactInfos>
      </Container>
    </Layout>
  );
};

export default Contact;
