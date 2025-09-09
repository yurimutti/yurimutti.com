import Link from 'next/link';
import { getBlogPosts } from '@/utils/blog';

async function getTagsWithCounts(): Promise<
  Array<{ name: string; count: number }>
> {
  const allPosts = getBlogPosts();
  const tagCounts = new Map<string, number>();

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export default async function TagsPage() {
  const tagsWithCounts = await getTagsWithCounts();

  return (
    <main>
      <section className="max-w-screen-md mx-auto px-4 my-4 sm:my-6">
        <h1 className="text-xl sm:text-md md:text-lg font-bold tracking-tight text-accent mb-6">
          Tags
        </h1>

        <div className="space-y-1">
          {tagsWithCounts.map(({ name, count }) => (
            <div key={name} className="text-foreground">
              <Link
                href={`/tags/${encodeURIComponent(name.toLowerCase())}`}
                className="hover:text-primary transition-colors duration-200"
              >
                {name}
              </Link>
              <span className="text-muted-foreground"> ({count})</span>
            </div>
          ))}
        </div>

        {tagsWithCounts.length === 0 && (
          <p className="text-muted-foreground">No tags found.</p>
        )}
      </section>
    </main>
  );
}

export const metadata = {
  title: 'All Tags',
  description: 'Browse blog posts by tag and topic',
};
