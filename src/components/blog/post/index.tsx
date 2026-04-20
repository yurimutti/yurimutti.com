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
        <h1 className="text-4xl font-bold mb-3 text-foreground">
          {meta.title}
        </h1>
        <p className="text-muted-foreground text-sm mb-4">
          {formatDate(meta.publishedAt)} • {meta.readingTime ?? '3 min read'}
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
        <article className="prose mx-auto my-6 sm:my-8 max-w-screen-md text-muted-foreground [&_p]:my-4 [&_p]:text-muted-foreground [&_li]:my-1 [&_li]:text-muted-foreground [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-muted-foreground [&_ol>li]:text-muted-foreground [&_ol>li]:marker:text-foreground [&_ol>li]:marker:font-bold [&_blockquote]:text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-current [&_a]:transition-opacity [&_a]:duration-200 [&_a:visited]:text-foreground [&_a:hover]:opacity-60 [&_a:hover]:underline [&_a:focus-visible]:opacity-60 [&_a:focus-visible]:underline [&_hr]:my-8 [&_hr]:border-0 [&_hr]:border-t [&_hr]:border-border [&_h1]:text-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_h4]:text-foreground [&_h5]:text-foreground [&_h6]:text-foreground [&_strong]:text-foreground">
          {children}
        </article>
      </section>
    </main>
  );
}
