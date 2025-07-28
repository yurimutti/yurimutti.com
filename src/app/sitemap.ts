import { getBlogPosts } from '@/utils/blog';

export const dynamic = 'force-static';

export const prodUrl = 'https://yurimutti.com';

export default async function sitemap() {
  const staticRoutes = ['/', '/posts'].map((route) => ({
    url: `${prodUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const posts = getBlogPosts().map((post) => ({
    url: `${prodUrl}${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
  }));

  return [...staticRoutes, ...posts];
}
