import { getBlogPosts } from '@/utils/blog';
import { prodUrl } from '../sitemap';

export const dynamic = 'force-static';

export async function GET() {
  const posts = getBlogPosts();

  const itemsXml = posts
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .map(
      (post) => `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${prodUrl}${post.slug}</link>
        <guid>${prodUrl}${post.slug}</guid>
        <description>${escapeXml(post.summary || '')}</description>
        <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        ${post.updatedAt ? `<lastBuildDate>${new Date(post.updatedAt).toUTCString()}</lastBuildDate>` : ''}
      </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Yuri Mutti's Blog</title>
      <link>${prodUrl}</link>
      <description>Thoughts, code, and ideas from Yuri Mutti</description>
      ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}
