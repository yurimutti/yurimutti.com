import Link from 'next/link';

const posts = [
  {
    slug: '/posts/good-vs-great-animations',
    title: 'Good vs Great Animations',
    description: 'Practical tips on how to improve your animations.',
    date: '2025-07-05',
    tags: ['react', 'animation', 'ui'],
    readingTime: '5 min read',
  },
  {
    slug: '/posts/testing-next-canary',
    title: 'Testing against every Next.js canary release',
    description:
      'How to run a GitHub Actions workflow when a new pre-release version of Next.js is published.',
    date: '2023-11-06',
    tags: ['next.js', 'github-actions', 'testing'],
  },
];

export default function Blog() {
  return (
    <main>
      <section className="max-w-screen-md mx-auto grid gap-4 sm:gap-6 px-3 sm:px-4 md:px-6 my-4 sm:my-6">
        <h1 className="text-xl sm:text-md md:text-lg  font-bold tracking-tight text-accent ">
          Writing
        </h1>

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={post.slug}
            className="block group transition-colors duration-200 hover:bg-muted/30 rounded-md px-4 py-6"
          >
            <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              • {post.readingTime}
            </p>

            <h2 className="text-xl font-semibold tracking-tight text-foreground group-hover:underline">
              {post.title}
            </h2>

            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground">
              {post.description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
