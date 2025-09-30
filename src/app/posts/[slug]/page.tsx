import path from 'path';
import fs from 'fs';
import { notFound } from 'next/navigation';
import { BlogPost, type PostMeta } from '@/components/blog/post';
import { prodUrl } from '@/app/sitemap';
import type { Metadata } from 'next';

const META = /export\s+const\s+meta\s+=\s+(\{[\s\S]*?\})/;

function parseFrontmatter(fileContent: string): PostMeta {
  const match = META.exec(fileContent);
  if (!match || typeof match[1] !== 'string') {
    throw new Error('Missing `export const meta = {}` in MDX file');
  }
  const meta = eval('(' + match[1] + ')');
  return { views: 0, ...meta };
}

export async function generateStaticParams() {
  const basePath = path.join(process.cwd(), 'src/app/posts');
  return fs
    .readdirSync(basePath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({ slug: entry.name }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  const postPath = path.join(process.cwd(), 'src/app/posts', slug, 'page.mdx');
  if (!fs.existsSync(postPath)) notFound();

  const fileContent = fs.readFileSync(postPath, 'utf8');
  const metadata = parseFrontmatter(fileContent);

  const ogImageUrl = metadata.image
    ? `${prodUrl}${metadata.image}`
    : `${prodUrl}/og?title=${encodeURIComponent(metadata.title)}&subtitle=${encodeURIComponent(metadata.summary || 'Blog Post')}`;

  return {
    title: metadata.title,
    description: metadata.summary,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      url: `${prodUrl}/posts/${slug}`,
      siteName: 'Yuri Mutti',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(metadata.publishedAt).toISOString(),
      modifiedTime: new Date(
        metadata.updatedAt ?? metadata.publishedAt
      ).toISOString(),
      authors: ['Yuri Mutti'],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.summary,
      images: [ogImageUrl],
      creator: '@yurimutti',
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const postPath = path.join(process.cwd(), 'src/app/posts', slug, 'page.mdx');
  if (!fs.existsSync(postPath)) notFound();

  const fileContent = fs.readFileSync(postPath, 'utf8');
  const metadata = parseFrontmatter(fileContent);

  const MDXContent = (await import(`../${slug}/page.mdx`)).default;

  return (
    <BlogPost meta={{ ...metadata, slug }}>
      <MDXContent />
    </BlogPost>
  );
}
