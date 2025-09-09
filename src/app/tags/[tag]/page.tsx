import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPosts, PostMetadata } from '@/utils/blog';
import { PostCard } from '@/components/blog/post-card';

async function getPostsByTag(tag: string): Promise<PostMetadata[]> {
  const allPosts = getBlogPosts();
  return allPosts.filter((post) =>
    post.tags?.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

async function getAllTags(): Promise<string[]> {
  const allPosts = getBlogPosts();
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

interface PageProps {
  params: Promise<{ tag: string }>;
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = await getPostsByTag(decodedTag);

  if (posts.length === 0) {
    notFound();
  }

  const capitalizedTag =
    decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1);

  return (
    <main>
      <section className="max-w-screen-md mx-auto px-4 my-4 sm:my-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-md md:text-lg font-bold tracking-tight text-accent">
            {capitalizedTag}
          </h1>
          <Link
            href="/tags"
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            View all tags
          </Link>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} titleSize="xl" />
          ))}
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const allTags = await getAllTags();

  return allTags.map((tag) => ({
    tag: encodeURIComponent(tag.toLowerCase()),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const capitalizedTag =
    decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1);

  return {
    title: `Posts tagged with "${capitalizedTag}"`,
    description: `Browse all blog posts tagged with ${capitalizedTag}`,
  };
}
