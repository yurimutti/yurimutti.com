import path from 'path';
import fs from 'fs';
import { notFound } from 'next/navigation';
import { BlogPost } from '../blog-post';

const META = /export\s+const\s+meta\s+=\s+(\{[\s\S]*?\})/;

export type Metadata = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary: string;
  state: 'draft' | 'published' | 'archived';
  views: number;
  image?: string;
  slug?: string;
};

function parseFrontmatter(fileContent: string): Metadata {
  const match = META.exec(fileContent);
  if (!match || typeof match[1] !== 'string') {
    throw new Error('Missing `export const meta = {}` in MDX file');
  }

  const meta = eval('(' + match[1] + ')');
  return { views: 0, ...meta };
}

export async function generateStaticParams() {
  const basePath = path.join(process.cwd(), 'app/posts');
  const slugs = fs
    .readdirSync(basePath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({ slug: entry.name }));
  return slugs;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postPath = path.join(
    process.cwd(),
    'app/posts',
    params.slug,
    'page.mdx'
  );
  if (!fs.existsSync(postPath)) notFound();

  const fileContent = fs.readFileSync(postPath, 'utf8');
  const metadata = parseFrontmatter(fileContent);

  const MDXContent = (await import(`../${params.slug}/page.mdx`)).default;

  return (
    <BlogPost meta={{ ...metadata, slug: params.slug }}>
      <MDXContent />
    </BlogPost>
  );
}
