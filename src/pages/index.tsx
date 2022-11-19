import type { NextPage } from 'next';

import { Ellipses } from '@/components/layouts/ellipses';
import { Hero } from '@/components/layouts/hero';
import { Layout } from '@/components/layouts/layout';
import { Wrapper } from '@/components/layouts/wrapper';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Ellipses />
      <Layout>
        <Hero />
      </Layout>
    </Wrapper>
  );
};

export default Home;
