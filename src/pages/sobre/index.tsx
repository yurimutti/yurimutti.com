import { Container } from '@/components/layouts/container';
import { Layout } from '@/components/layouts/layout';

import * as S from './styles';

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
        <S.PageTitle>Sobre mim</S.PageTitle>

        <S.AboutMe>
          <S.AboutMeImage>
            {' '}
            <img src="https://placehold.co/400x400" alt="Yuri Mutti" />
          </S.AboutMeImage>
          <S.AboutMeText>
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
          </S.AboutMeText>
        </S.AboutMe>

        <S.Carreer>
          <S.CarreerList>
            <h3>Carreira</h3>

            {carreerItems.map((item) => (
              <S.CarreerItem key={item.company}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div>
                    <span>{item.date}</span>
                  </div>
                  <div>
                    <h3>{item.position}</h3>
                    <h4>{item.company}</h4>
                  </div>
                </a>
              </S.CarreerItem>
            ))}
          </S.CarreerList>
        </S.Carreer>
      </Container>
    </Layout>
  );
};

export default About;
