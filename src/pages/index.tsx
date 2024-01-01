import { NextPage } from 'next';
import Head from 'next/head';

import { Ellipses } from '@/components/layouts/ellipses';
import { Hero } from '@/components/layouts/hero';
import { Layout } from '@/components/layouts/layout';
import { Wrapper } from '@/components/layouts/wrapper';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Yuri Mutti</title>
        <meta content="Yuri Mutti" name="author" />
        <meta
          content="I am a software engineer with a passion for building products and solving problems with code."
          name="description"
        />
        <meta
          content="I am a software engineer with a passion for building products and solving problems with code."
          property="og:description"
        />
        <meta
          content="https://yurimutti.com/assets/images/banner.jpg"
          property="og:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>

      <Ellipses />
      <Layout>
        <Hero />
      </Layout>
    </Wrapper>
  );
};

export default Home;
