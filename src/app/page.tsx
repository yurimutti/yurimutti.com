import Link from 'next/link';

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
  return (
    <main>
      <section className="max-w-screen-md mx-auto grid gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 my-6 sm:my-8">
        <section className="grid gap-2">
          <h1 className="text-accent text-xl sm:text-md md:text-lg font-semibold tracking-tight mb-2">
            About
          </h1>
          <p className="text-muted-foreground leading-relaxed text-base">
            I work as a design engineer at Linear. I like to build things for
            designers and developers, and think deeply about the user interface,
            how it looks, feels, behaves. Previously, I worked on the design
            team at Vercel.
          </p>
        </section>

        <section className="grid gap-2">
          <h1 className="text-accent text-xl sm:text-md md:text-lg  font-semibold tracking-tight mb-2">
            Recent Blog Posts
          </h1>

          <section className="grid gap-2">
            <Link
              href="/posts/good-vs-great-animations"
              className="block group"
            >
              <section className="mx-auto px-4 py-8 transition-colors duration-200 hover:bg-muted/20 rounded-md">
                <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground">
                  July 5, 2025
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:underline">
                  Good vs Great Animations
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground">
                  Practical tips on how to improve your animations.
                </p>
              </section>
            </Link>

            <Link
              href="/posts/good-vs-great-animations"
              className="block group"
            >
              <section className="mx-auto px-4 py-8 transition-colors duration-200 hover:bg-muted/20 rounded-md">
                <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground">
                  July 5, 2025
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:underline">
                  Good vs Great Animations
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground">
                  Practical tips on how to improve your animations.
                </p>
              </section>
            </Link>
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
