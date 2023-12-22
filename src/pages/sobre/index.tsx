import Image from 'next/image';

import { Container } from '@/components/layouts/container';
import { Layout } from '@/components/layouts/layout';

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

const Title = styled('h2', {
  color: '$slate12',
  fontSize: '$3',
  fontWeight: 'lighter',
  marginBottom: '$1',
});

const Subtitle = styled('h3', {
  color: '$slate12',
  fontSize: '$3',
  fontWeight: 'lighter',
  marginBottom: '$2',
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

const PositionInfos = styled('div', {
  textAlign: 'right',
});

const carreerItems = [
  {
    date: 'Jul 2023 - Present',
    position: 'Senior Frontend Engineer',
    company: 'Zapay - Brasília, Federal District, Brazil (Remote)',
    link: 'https://www.usezapay.com.br',
  },
  {
    date: 'Jan 2023 - Present',
    position: 'Senior Frontend Engineer',
    company: 'Makes - Goiás, Brazil (Remote)',
    link: 'https://makes.ai/',
  },
  {
    date: 'May 2022 - Aug 2023',
    position: 'Software Engineer',
    company: 'quero delivery - Lagarto, Sergipe, Brazil',
    link: 'https://querodelivery.com/',
  },
  {
    date: 'Nov 2021 - Apr 2022',
    position: 'Frontend Engineer',
    company:
      'Avanti E-commerce & Marketing Digital - Florianópolis, Santa Catarina, Brazil',
    link: 'https://penseavanti.com.br/ecommerce/',
  },
  {
    date: 'Sep 2021 - Nov 2021',
    position: 'Frontend Engineer',
    company: 'Enext, a Wunderman Thompson Company - São Paulo, Brazil',
    link: 'https://enext.com.br/',
  },
  {
    date: 'Apr 2021 - Sep 2021',
    position: 'Frontend Engineer',
    company: 'MNZ Tecnologia - Florianópolis, Santa Catarina, Brazil',
    link: 'https://mnztecnologia.com.br/',
  },
  {
    date: 'Feb 2021 - Apr 2021',
    position: 'Estágio em Desenvolvimento de Software',
    company: 'Softwell Solutions Ltda - Salvador, Bahia, Brazil',
    link: 'https://www.softwell.com.br/',
  },
];

const About = () => {
  return (
    <Layout>
      <Container>
        <PageTitle>Sobre mim</PageTitle>

        <AboutMe>
          <AboutMeImage>
            {' '}
            <Image
              src="/assets/brand/yurimutti-2.jpeg"
              alt="Yuri Mutti"
              width={450}
              height={450}
            />
          </AboutMeImage>
          <AboutMeText>
            <Title>Yuri Mutti</Title>
            <Subtitle>Engenheiro Frontend</Subtitle>
            <p>
              Com base em JavaScript, TypeScript, bibliotecas e frameworks
              populares como React.js e Next.js. Experiência em diversas
              startups, agências e empresas de tecnologia, destacando
              habilidades versáteis e adaptabilidade em diferentes contextos
              profissionais. Apaixonado por contribuir para projetos de código
              aberto e por se destacar em ambientes de equipe.
            </p>
            <p>
              Quando não estou no computador, gosto de ir para academia, brincar
              com meu cachorro, assistir animes e jogar video game.
            </p>
          </AboutMeText>
        </AboutMe>

        <Carreer>
          <CarreerList>
            <h3>Carreira</h3>

            {carreerItems.map((item) => (
              <CarreerItem key={item.company}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div>
                    <span>{item.date}</span>
                  </div>
                  <PositionInfos>
                    <h3>{item.position}</h3>
                    <h4>{item.company}</h4>
                  </PositionInfos>
                </a>
              </CarreerItem>
            ))}
          </CarreerList>
        </Carreer>
      </Container>
    </Layout>
  );
};

export default About;
