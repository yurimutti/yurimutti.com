import { Container } from '@/components/layouts/container';
import { Layout } from '@/components/layouts/layout';

import * as S from './styles';

const projects = [
  {
    name: 'Makes',
    link: 'https://www.makes.ai/',
    tech: ['React', 'JavaScript'],
    text: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
  },
  {
    name: 'Propulmão',
    link: 'https://propulmao.com.br/',
    tech: ['React', 'JavaScript'],
    text: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
  },
  {
    name: 'Mnz Tecnologia',
    link: 'https://mnztecnologia.com.br/',
    tech: ['React', 'JavaScript'],
    text: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
  },
  {
    name: 'MeStream',
    link: 'https://mestream.com.br/',
    tech: ['React', 'JavaScript'],
    text: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
  },
  {
    name: 'Projeto Cria',
    link: 'https://projetocria.org.br',
    tech: ['React', 'JavaScript'],
    text: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
  },
];

const Projects = () => {
  return (
    <Layout>
      <Container>
        <S.PageTitle>Todos Projetos</S.PageTitle>

        <S.Projects>
          <S.ProjectList>
            {projects.map((item) => (
              <S.ProjectItem key={item.name}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div>
                    <img src="https://placehold.co/144x88" alt={item.title} />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <h4>{item.text}</h4>

                    <S.Tech>
                      {item.tech.map((tech) => (
                        <S.Badge key={tech}>
                          <span>{tech}</span>
                        </S.Badge>
                      ))}
                    </S.Tech>
                  </div>
                </a>
              </S.ProjectItem>
            ))}
          </S.ProjectList>
        </S.Projects>
      </Container>
    </Layout>
  );
};

export default Projects;
