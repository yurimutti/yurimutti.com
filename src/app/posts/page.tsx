import { Page } from '@/components/ui/page';
import type { Metadata } from 'next';
import { getBlogPosts } from '@/utils/blog';
import { PostList } from '@/components/blog/post/post-row';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Articles by Yuri Mutti on frontend and product engineering.',
};

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <main>
      <Page>
        <Section title="Writing" as="h1">
          <PostList posts={posts} />
        </Section>
      </Page>
    </main>
  );
}
