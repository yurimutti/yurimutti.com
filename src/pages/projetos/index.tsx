import Head from 'next/head';

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

  '@md': {
    fontSize: '32px',
    lineHeight: '32px',
  },
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

  '@md': {
    gap: '$1',
    marginBottom: '$2',
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

  '.light &': {
    h3: {
      color: '$slate8',
    },
  },

  '@md': {
    padding: '$2',
    a: {
      flexDirection: 'column',
      gap: '$1',
    },
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

  '.light &': {
    backgroundColor: '$indigo2',
    span: {
      color: '$slate12',
    },
  },
});

const projects = [
  {
    name: 'Makes',
    link: 'https://www.makes.ai/',
    thumb: 'https://placehold.co/144x88',
    tech: ['React', 'JavaScript'],
    text: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
  },
  {
    name: 'Propulmão',
    link: 'https://propulmao.com.br/',
    thumb: 'https://placehold.co/144x88',
    tech: ['React', 'JavaScript'],
    text: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
  },
  {
    name: 'Mnz Tecnologia',
    link: 'https://mnztecnologia.com.br/',
    thumb: 'https://placehold.co/144x88',
    tech: ['React', 'JavaScript'],
    text: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
  },
  {
    name: 'MeStream',
    link: 'https://mestream.com.br/',
    thumb: 'https://placehold.co/144x88',
    tech: ['React', 'JavaScript'],
    text: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
  },
  {
    name: 'Projeto Cria',
    link: 'https://projetocria.org.br',
    thumb: 'https://placehold.co/144x88',
    tech: ['React', 'JavaScript'],
    text: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
  },
];

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Yuri Mutti - Projetos</title>
        <meta content="Yuri Mutti - Sobre" property="og:title" />
        <meta
          content="Lista com todos projetos desenvolvido por Yuri Mutti."
          name="description"
        />
        <meta
          content="Lista com todos projetos desenvolvido por Yuri Mutti."
          property="og:description"
        />
        <meta content="https://yurimutti.com/projetos" property="og:url" />
        <meta
          content="https://yurimutti.com/assets/images/banner.jpg"
          property="og:image"
        />
      </Head>
      <Container>
        <PageTitle>Todos Projetos</PageTitle>

        <ProjectsWrapper>
          <ProjectList>
            {projects.map((item) => (
              <ProjectItem key={item.name}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div>
                    <img src={item.thumb} alt={item.name} />
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
