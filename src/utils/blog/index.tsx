import fs from 'fs';
import path from 'path';

const META = /export\s+const\s+meta\s+=\s+(\{[\s\S]*?\})/;

export type PostMetadata = {
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  state: 'published' | 'draft' | 'archived';
  views: number;
  image?: string;
  tags?: string[];
  readingTime?: string;
  slug: string;
};

export function getBlogPosts(): PostMetadata[] {
  const basePath = path.join(process.cwd(), 'src/app/posts');
  const folders = fs
    .readdirSync(basePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory());

  const posts: PostMetadata[] = [];

  for (const dir of folders) {
    const filePath = path.join(basePath, dir.name, 'page.mdx');
    if (!fs.existsSync(filePath)) continue;

    const raw = fs.readFileSync(filePath, 'utf-8');
    const match = META.exec(raw);

    if (!match || typeof match[1] !== 'string') continue;

    const meta = eval('(' + match[1] + ')');

    if (meta.state !== 'published') continue;

    posts.push({
      ...meta,
      readingTime: meta.readingTime ?? '3 min read',
      tags: meta.tags ?? [],
      slug: `/posts/${dir.name}`,
    });
  }

  return posts.sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );
}
