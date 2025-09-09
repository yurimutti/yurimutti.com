import { getBlogPosts } from '@/utils/blog';
import Link from 'next/link';
import { prodUrl } from './sitemap';

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
      <section className="max-w-screen-md mx-auto grid gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 my-6 sm:my-8">
        <section className="grid gap-2">
          <h1 className="text-accent text-xl sm:text-md md:text-lg font-semibold tracking-tight mb-2">
            About
          </h1>
          <p className="text-muted-foreground leading-relaxed text-base">
            I’m a Software Engineer who solves problems with code. Over the past
            few years, I’ve been working in fintech. I’m also a co-founder,
            active in the tech community, and I enjoy sharing what I learn and
            contributing to open source.
          </p>
        </section>

        <section className="grid gap-2">
          <h1 className="text-accent text-xl sm:text-md md:text-lg font-semibold tracking-tight mb-2">
            Recent Blog Posts
          </h1>

          <section className="grid gap-2">
            {posts.map((post) => (
              <Link href={post.slug} key={post.slug} className="block group">
                <section className="mx-auto px-4 py-8 transition-colors duration-200 hover:bg-muted/20 rounded-md">
                  <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground">
                    {post.summary}
                  </p>
                </section>
              </Link>
            ))}
          </section>

          <Link
            href="/posts"
            className="py-1 underline transition-colors duration-200 hover:text-primary ml-auto"
          >
            View all posts →
          </Link>
        </section>
      </section>
    </main>
  );
}
