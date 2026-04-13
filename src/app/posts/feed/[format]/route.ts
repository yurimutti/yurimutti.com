import { Feed } from 'feed';
import { getBlogPosts } from '@/utils/blog';
import { prodUrl } from '@/app/sitemap';

export const dynamic = 'force-static';

type FeedFormat = 'rss' | 'atom' | 'json';

export async function generateStaticParams() {
  return [
    { format: 'rss.xml' },
    { format: 'atom.xml' },
    { format: 'articles.json' },
  ];
}

function resolveFormat(formatSlug: string): FeedFormat | null {
  if (formatSlug === 'rss.xml') return 'rss';
  if (formatSlug === 'atom.xml') return 'atom';
  if (formatSlug === 'articles.json') return 'json';
  return null;
}

export async function GET(
  _: Request,
  { params }: { params: Promise<{ format: string }> }
) {
  const { format: formatSlug } = await params;
  const format = resolveFormat(formatSlug);

  if (!format) {
    return Response.json({ error: 'Unsupported feed format' }, { status: 400 });
  }

  const posts = getBlogPosts();
  const feed = new Feed({
    title: "Yuri Mutti's Blog",
    description: 'Thoughts, code, and ideas from Yuri Mutti',
    id: `${prodUrl}/posts`,
    link: `${prodUrl}/posts`,
    language: 'en',
    favicon: `${prodUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Yuri Mutti`,
    feedLinks: {
      rss: `${prodUrl}/posts/feed/rss.xml`,
      atom: `${prodUrl}/posts/feed/atom.xml`,
      json: `${prodUrl}/posts/feed/articles.json`,
    },
    author: {
      name: 'Yuri Mutti',
      link: prodUrl,
    },
  });

  posts.forEach((post) => {
    const url = `${prodUrl}${post.slug}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.summary,
      category: (post.tags ?? []).map((tag) => ({ name: tag, term: tag })),
      date: new Date(post.updatedAt ?? post.publishedAt),
      published: new Date(post.publishedAt),
      image: post.image ? `${prodUrl}${post.image}` : undefined,
      author: [
        {
          name: 'Yuri Mutti',
          link: prodUrl,
        },
      ],
    });
  });

  if (format === 'rss') {
    return new Response(feed.rss2(), {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
      },
    });
  }

  if (format === 'atom') {
    return new Response(feed.atom1(), {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
      },
    });
  }

  return new Response(feed.json1(), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
    },
  });
}
