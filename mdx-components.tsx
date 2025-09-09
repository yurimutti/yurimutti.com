import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { CodeBlock } from './src/components/code-block';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image,
    pre: ({ children, ...props }: any) => {
      const child = children?.props?.children;
      const className = children?.props?.className || '';
      const language = className.replace('language-', '') || 'text';

      if (typeof child === 'string') {
        return <CodeBlock language={language}>{child.trim()}</CodeBlock>;
      }

      return <pre {...props}>{children}</pre>;
    },
  };
}
