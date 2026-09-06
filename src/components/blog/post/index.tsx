import Link from 'next/link';
import { Page } from '@/components/ui/page';
import { prodUrl } from '@/app/sitemap';

export type PostMeta = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary: string;
  state: 'draft' | 'published' | 'archived';
  views: number;
  image?: string;
  slug?: string;
  tags?: string[];
  readingTime?: string;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-us', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

export function BlogPost({
  meta,
  children,
}: {
  meta: PostMeta;
  children: React.ReactNode;
}) {
  return (
    <main>
      <Page className="block">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${prodUrl}/posts/${meta.slug}`,
              },
              headline: meta.title,
              description: meta.summary || undefined,
              image:
                meta.image && meta.image.trim()
                  ? [`${prodUrl}${meta.image}`]
                  : [
                      `${prodUrl}/og?title=${encodeURIComponent(meta.title)}&subtitle=${encodeURIComponent(meta.summary || 'Blog Post')}`,
                    ],
              author: { '@type': 'Person', name: 'Yuri Mutti', url: prodUrl },
              publisher: {
                '@type': 'Person',
                name: 'Yuri Mutti',
                url: prodUrl,
              },
              datePublished: new Date(meta.publishedAt).toISOString(),
              dateModified: new Date(
                meta.updatedAt ?? meta.publishedAt
              ).toISOString(),
              inLanguage: 'en',
              url: `${prodUrl}/posts/${meta.slug}`,
            }),
          }}
        />
        <header className="mb-8 grid gap-3">
          <h1 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {meta.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            <time dateTime={meta.publishedAt}>
              {formatDate(meta.publishedAt)}
            </time>
            {' · '}
            {meta.readingTime ?? '3 min read'}
          </p>
          {meta.tags && meta.tags.length > 0 && (
            <ul className="flex flex-wrap gap-x-2 text-sm text-muted-foreground">
              {meta.tags.map((tag, index) => (
                <li key={tag} className="flex gap-x-2">
                  {index > 0 && <span aria-hidden="true">·</span>}
                  <Link
                    href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
                    className="rounded-sm outline-none transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {meta.summary && (
            <p className="max-w-prose leading-relaxed text-muted-foreground">
              {meta.summary}
            </p>
          )}
        </header>
        {meta.state !== 'published' && (
          <div className="mb-8 rounded-md border border-border p-4 text-sm">
            <p className="font-medium text-foreground">
              This post is {meta.state === 'archived' ? 'archived' : 'a draft'}.
            </p>
            <p className="mt-1 text-muted-foreground">
              {meta.state === 'draft'
                ? 'Please do not share this post yet.'
                : 'This post may contain outdated info and is preserved for reference.'}
            </p>
          </div>
        )}
        <article className="prose mx-auto my-6 sm:my-8 max-w-screen-md text-foreground leading-7 [&_p]:my-5 [&_li]:my-1.5 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol>li]:marker:text-muted-foreground [&_ul>li]:marker:text-muted-foreground [&_blockquote]:my-5 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-muted-foreground/50 [&_a]:transition-[text-decoration-color] [&_a]:duration-200 [&_a]:motion-reduce:transition-none [&_a:visited]:text-foreground [&_a:hover]:decoration-foreground [&_a:focus-visible]:decoration-foreground [&_hr]:my-10 [&_hr]:border-0 [&_hr]:border-t [&_hr]:border-border [&_strong]:font-semibold [&_strong]:text-foreground [&_img]:rounded-md [&_table]:my-5 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-medium [&_th]:text-muted-foreground [&_th]:pb-2 [&_td]:py-2 [&_td]:border-t [&_td]:border-border">
          {children}
        </article>
      </Page>
    </main>
  );
}
