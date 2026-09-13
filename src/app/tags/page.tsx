import Link from 'next/link';
import { Page } from '@/components/ui/page';
import { getBlogPosts } from '@/utils/blog';
import { Section } from '@/components/ui/section';

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
      <Page>
        <Section title="Tags" as="h1">
          {tagsWithCounts.length > 0 ? (
            <ul className="grid gap-1">
              {tagsWithCounts.map(({ name, count }) => (
                <li key={name}>
                  <Link
                    href={`/tags/${encodeURIComponent(name.toLowerCase())}`}
                    className="link-primary"
                  >
                    {name}
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    {' '}
                    {count}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No tags found.</p>
          )}
        </Section>
      </Page>
    </main>
  );
}

export const metadata = {
  title: 'All Tags',
  description: 'Browse blog posts by tag and topic',
};
