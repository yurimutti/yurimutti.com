import Link from 'next/link';
import type { PostMetadata } from '@/utils/blog';
import { LinkArrow } from '@/components/ui/link-arrow';

interface PostRowProps {
  post: PostMetadata;
}

/**
 * One article in a list. Title, year and a one-line summary; the whole row is
 * the link. Tags and reading time live on the article page, not here.
 */
export function PostRow({ post }: PostRowProps) {
  const year = new Date(post.publishedAt).getFullYear();

  return (
    <li>
      <Link
        href={post.slug}
        className="group -mx-2 block rounded-md px-2 py-3 outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-medium text-foreground">
            {post.title}
            <LinkArrow />
          </h3>
          <time
            dateTime={post.publishedAt}
            className="shrink-0 text-sm tabular-nums text-muted-foreground"
          >
            {year}
          </time>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {post.summary}
        </p>
      </Link>
    </li>
  );
}

interface PostListProps {
  posts: PostMetadata[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <ul className="grid gap-2">
      {posts.map((post) => (
        <PostRow key={post.slug} post={post} />
      ))}
    </ul>
  );
}
