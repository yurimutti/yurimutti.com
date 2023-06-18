import { Container } from '@/components/layouts/container';
import { Layout } from '@/components/layouts/layout';

import * as S from './styles';

const Projects = () => {
  return (
    <Layout>
      <Container>
        <S.PageTitle>Todos Projetos</S.PageTitle>

        <S.Projects>
          <div>
            <h3>2023</h3>
            <ul>
              <li>
                <a
                  href="https://www.makes.ai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Makes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>2022</h3>
            <ul>
              <li>
                <a
                  href="https://propulmao.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Propulmão
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>2021</h3>
            <ul>
              <li>
                <a
                  href="https://mnztecnologia.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mnz Tecnologia
                </a>
              </li>
              <li>
                <a
                  href="https://mestream.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MeStream
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>2020</h3>
            <ul>
              <li>
                <a
                  href="https://projetocria.org.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  Projeto Cria
                </a>
              </li>
            </ul>
          </div>
        </S.Projects>
      </Container>
    </Layout>
  );
};

export default Projects;
