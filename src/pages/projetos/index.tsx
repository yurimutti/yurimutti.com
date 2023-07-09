import { Container } from '@/components/layouts/container';
import { Layout } from '@/components/layouts/layout';

import { styled } from '@/libs/stitches';

export const PageTitle = styled('h1', {
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage:
    'linear-gradient(135deg, var(--colors-indigo3) 0%, var(--colors-indigo12) 100% )',
  fontSize: '48px',
  lineHeight: '50px',
  margin: '$3 0',
});

export const ProjectsWrapper = styled('div', {
  color: '$white',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginBottom: '$4',

  img: {
    borderRadius: '$default',
  },
});

export const ProjectList = styled('ul', {
  marginBottom: '$3',
  displayFlex: 'column',
  gap: '$2',
});

export const ProjectItem = styled('li', {
  borderRadius: '$default',
  padding: '$3',
  border: '1px solid',
  borderColor: '$slate6',
  transition: 'all $durations ease',
  marginBottom: '$2',
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

export const Tech = styled('div', {
  margin: '$2 0',
  display: 'flex',
  gap: '$2',
});

export const Badge = styled('div', {
  borderRadius: '64px',
  backgroundColor: 'hsla(0,0%,100%,.04)',
  padding: '$1 $2',

  span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '$indigo9',
  },
});

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
        <PageTitle>Todos Projetos</PageTitle>

        <ProjectsWrapper>
          <ProjectList>
            {projects.map((item) => (
              <ProjectItem key={item.name}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div>
                    <img src="https://placehold.co/144x88" alt={item.name} />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <h4>{item.text}</h4>

                    <Tech>
                      {item.tech.map((tech) => (
                        <Badge key={tech}>
                          <span>{tech}</span>
                        </Badge>
                      ))}
                    </Tech>
                  </div>
                </a>
              </ProjectItem>
            ))}
          </ProjectList>
        </ProjectsWrapper>
      </Container>
    </Layout>
  );
};

export default Projects;
