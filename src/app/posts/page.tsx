import { getBlogPosts } from '@/utils/blog';
import Link from 'next/link';

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <main>
      <section className="max-w-screen-md mx-auto grid gap-4 sm:gap-6 px-4 my-4 sm:my-6">
        <h1 className="text-xl sm:text-md md:text-lg font-bold tracking-tight text-accent">
          Writing
        </h1>

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={post.slug}
            className="block group transition-colors duration-200 hover:bg-muted/30 rounded-md px-4 py-6"
          >
            <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground">
              {post.summary}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
