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
      <section className="px-4 max-w-screen-md mx-auto my-8">
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
              image: meta.image
                ? [`${prodUrl}${meta.image}`]
                : [`${prodUrl}/og?title=${encodeURIComponent(meta.title)}`],
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
        <h1 className="text-4xl font-bold mb-3">{meta.title}</h1>
        <p className="text-muted-foreground text-sm mb-4">
          {formatDate(meta.publishedAt)}
        </p>
        {meta.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {meta.summary && (
          <p className="text-muted-foreground mb-6">{meta.summary}</p>
        )}
        {meta.state !== 'published' && (
          <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 p-4 rounded-lg mb-8">
            <p className="font-bold">
              This post is {meta.state === 'archived' ? 'archived' : 'a draft'}.
            </p>
            <p>
              {meta.state === 'draft'
                ? 'Please do not share this post yet.'
                : 'This post may contain outdated info and is preserved for reference.'}
            </p>
          </div>
        )}
        <article className="prose prose-neutral dark:prose-invert mx-auto my-6 sm:my-8 max-w-screen-md">
          {children}
        </article>
      </section>
    </main>
  );
}
