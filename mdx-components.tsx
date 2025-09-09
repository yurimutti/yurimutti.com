import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import React from 'react';
import { CodeBlock } from './src/components/code/code-block';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image,
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
    ),
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h3 className="text-xl font-bold mt-5 mb-2" {...props} />
    ),
    h4: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h4 className="text-lg font-bold mt-4 mb-2" {...props} />
    ),
    h5: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h5 className="text-base font-bold mt-3 mb-1" {...props} />
    ),
    h6: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h6 className="text-sm font-bold mt-2 mb-1" {...props} />
    ),
    pre: ({ children, ...props }: React.HTMLProps<HTMLPreElement>) => {
      // Check if children is a React element with props
      if (React.isValidElement(children) && children.props) {
        const child = children.props.children;
        const className = children.props.className || '';
        const language = className.replace('language-', '') || 'text';

        if (typeof child === 'string') {
          return <CodeBlock language={language}>{child.trim()}</CodeBlock>;
        }
      }

      return <pre {...props}>{children}</pre>;
    },
  };
}
