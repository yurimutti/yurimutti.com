import type { NextPage } from 'next';

import { Footer } from '@/components/layouts/footer';
import { Navbar } from '@/components/layouts/navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default Home;
