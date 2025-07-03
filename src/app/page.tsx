import { Ellipses } from '@/components/layouts/ellipses';
import { Hero } from '@/components/layouts/hero';
import { Layout } from '@/components/layouts/layout';
import { Wrapper } from '@/components/layouts/wrapper';

export const metadata = {
  title: 'Yuri Mutti',
  authors: [{ name: 'Yuri Mutti' }],
  description:
    'I am a software engineer with a passion for building products and solving problems with code.',
  openGraph: {
    type: 'website',
    title: 'Yuri Mutti',
    description:
      'I am a software engineer with a passion for building products and solving problems with code.',
    images: ['https://yurimutti.com/assets/images/banner.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Home() {
  return (
    <Wrapper>
      <Ellipses />
      <Layout>
        <Hero />
      </Layout>
    </Wrapper>
  );
}
