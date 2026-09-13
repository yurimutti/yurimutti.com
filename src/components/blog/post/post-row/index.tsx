import Link from 'next/link';
import type { PostMetadata } from '@/utils/blog';

interface PostRowProps {
  post: PostMetadata;
}

/**
 * One article in a list. The title is the link; the row itself is plain
 * text. Tags and reading time live on the article page, not here.
 */
export function PostRow({ post }: PostRowProps) {
  const year = new Date(post.publishedAt).getFullYear();

  return (
    <li className="py-3">
      <div className="flex items-baseline justify-between gap-4">
        <h3>
          <Link href={post.slug} className="link-primary">
            {post.title}
          </Link>
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
    </li>
  );
}

interface PostListProps {
  posts: PostMetadata[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <ul className="grid">
      {posts.map((post) => (
        <PostRow key={post.slug} post={post} />
      ))}
    </ul>
  );
}
