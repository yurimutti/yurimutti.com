import { getBlogPosts } from '@/utils/blog';
import { prodUrl } from './sitemap';
import { PostCard } from '@/components/blog/post/post-card';

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
    images: ['https://yurimutti.com/assets/brand/yurimutti.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Home() {
  const posts = getBlogPosts().slice(0, 5);

  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Yuri Mutti',
              url: prodUrl,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Yuri Mutti',
              url: prodUrl,
              sameAs: [
                'https://github.com/yurimutti',
                'https://www.linkedin.com/in/yurimutti',
              ],
            },
          ]),
        }}
      />
      <section className="max-w-screen-md mx-auto grid gap-6 sm:gap-8 px-4 my-6 sm:my-8">
        <section className="grid gap-2">
          <h2 className="text-accent text-xl sm:text-md md:text-lg font-semibold tracking-tight mb-2">
            About me
          </h2>

          <p className="text-muted-foreground leading-relaxed text-base">
            Hi, I&apos;m Yuri. I&apos;m a software engineer who likes building
            things and solving problems with code. I enjoy working on open
            source projects and sharing what I learn along the way. This is my
            corner of the internet where I share these things.
          </p>
        </section>

        <section className="grid gap-2">
          <h2 className="text-accent text-xl sm:text-md md:text-lg font-semibold tracking-tight mb-2">
            Writing
          </h2>

          <section className="grid gap-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}
