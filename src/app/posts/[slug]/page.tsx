// import { notFound } from 'next/navigation';

// TODO: look this need to be dynamic or not
export const dynamicParams = false;

const posts = {
  'my-first-post': () => import('../my-first-post/page.mdx'),
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

// TODO: look if a way to improve this
type PostSlug = keyof typeof posts;

export default async function PostPage(
  {
    // params,
  }: {
    params: { slug: PostSlug };
  }
) {
  // const Post = posts[params.slug];
  // if (!Post) return notFound();
  // const { default: MDXContent } = await Post();

  return (
    <main className="max-w-screen-md mx-auto px-4 py-8">
      {/* <MDXContent /> */}
    </main>
  );
}
