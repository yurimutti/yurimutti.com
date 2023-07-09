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

const carreerItems = [
  {
    date: 'Feb 2021 - Apr 2021',
    position: 'Estágio em Desenvolvimento de Software',
    company: 'Softwell Solutions Ltda - Salvador, Bahia, Brasil',
    link: 'https://www.softwell.com.br/',
  },
  {
    date: 'Feb 2021 - Apr 2021',
    position: 'Estágio em Desenvolvimento de Software',
    company: 'Softwell Solutions Ltda - Salvador, Bahia, Brasil',
    link: 'https://www.softwell.com.br/',
  },
  {
    date: 'Feb 2021 - Apr 2021',
    position: 'Estágio em Desenvolvimento de Software',
    company: 'Softwell Solutions Ltda - Salvador, Bahia, Brasil',
    link: 'https://www.softwell.com.br/',
  },
  {
    date: 'Feb 2021 - Apr 2021',
    position: 'Estágio em Desenvolvimento de Software',
    company: 'Softwell Solutions Ltda - Salvador, Bahia, Brasil',
    link: 'https://www.softwell.com.br/',
  },
  {
    date: 'Feb 2021 - Apr 2021',
    position: 'Estágio em Desenvolvimento de Software',
    company: 'Softwell Solutions Ltda - Salvador, Bahia, Brasil',
    link: 'https://www.softwell.com.br/',
  },
  {
    date: 'Feb 2021 - Apr 2021',
    position: 'Estágio em Desenvolvimento de Software',
    company: 'Softwell Solutions Ltda - Salvador, Bahia, Brasil',
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
            <img src="https://placehold.co/400x400" alt="Yuri Mutti" />
          </AboutMeImage>
          <AboutMeText>
            <h2>Yuri Mutti</h2>
            <h3>Software Engineer</h3>
            <p>
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
            <p>
              My main focus these days is building products and leading projects
              for our clients at Upstatement. In my free time also released an
              online video course that covers everything you need to know to
              build a web app with the Spotify API. When I’m not at the
              computer, I’m usually rock climbing, hanging out with my wife and
              two cats, or running around Hyrule searching for Korok seeds
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
                  <div>
                    <h3>{item.position}</h3>
                    <h4>{item.company}</h4>
                  </div>
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
