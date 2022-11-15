import type { NextPage } from 'next';

import { Ellipses } from '@/components/layouts/ellipses';
import { Footer } from '@/components/layouts/footer';
import { Hero } from '@/components/layouts/hero';
import { Navbar } from '@/components/layouts/navbar';
import { Wrapper } from '@/components/layouts/wrapper';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Ellipses />
      <Navbar />
      <Hero />
      <Footer />
    </Wrapper>
  );
};

export default Home;
