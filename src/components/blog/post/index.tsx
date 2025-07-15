import { PropsWithChildren } from 'react';

export default function BlogPost({ children }: PropsWithChildren) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 my-6 sm:my-8">
      {children}
    </article>
  );
}
