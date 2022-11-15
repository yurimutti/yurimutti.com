import type { NextPage } from 'next';

import { Footer } from '@/components/layouts/footer';
import { Hero } from '@/components/layouts/hero';
import { Navbar } from '@/components/layouts/navbar';
import { Wrapper } from '@/components/layouts/wrapper';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
      <Footer />
    </Wrapper>
  );
};

export default Home;
