import { getBlogPosts } from '@/utils/blog';
import { PostCard } from '@/components/blog/post-card';

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <main>
      <section className="max-w-screen-md mx-auto grid gap-4 sm:gap-6 px-4 my-4 sm:my-6">
        <h1 className="text-xl sm:text-md md:text-lg font-bold tracking-tight text-accent">
          Writing
        </h1>

        {posts.map((post) => (
          <PostCard key={post.slug} post={post} titleSize="xl" />
        ))}
      </section>
    </main>
  );
}
