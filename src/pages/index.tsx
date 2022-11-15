import type { NextPage } from 'next';

import { Footer } from '@/components/layouts/footer';
import { Hero } from '@/components/layouts/hero';
import { Navbar } from '@/components/layouts/navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Home;
