import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import React from 'react';
import { Mermaid } from './src/components/blog/mermaid';
import { CodeBlock } from './src/components/code/code-block';
import { SandpackWrapper, CodeSandbox } from './src/components/code/sandpack';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image,
    SandpackWrapper,
    CodeSandbox,
    CodeBlock,
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h1
        className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-foreground"
        {...props}
      />
    ),
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h2
        className="mt-12 mb-4 text-xl font-semibold tracking-tight text-foreground"
        {...props}
      />
    ),
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h3
        className="mt-8 mb-3 text-lg font-semibold tracking-tight text-foreground"
        {...props}
      />
    ),
    h4: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h4
        className="mt-6 mb-2 text-base font-semibold text-foreground"
        {...props}
      />
    ),
    h5: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h5
        className="mt-5 mb-2 text-base font-medium text-foreground"
        {...props}
      />
    ),
    h6: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <h6
        className="mt-4 mb-1 text-sm font-medium text-foreground"
        {...props}
      />
    ),
    pre: ({ children, ...props }: React.HTMLProps<HTMLPreElement>) => {
      if (React.isValidElement(children) && children.props) {
        const child = children.props.children;
        const className = children.props.className || '';
        const language = className.replace('language-', '') || 'text';

        if (typeof child === 'string') {
          if (language === 'mermaid') {
            const source = child.trim();

            return <Mermaid source={source} />;
          }

          return <CodeBlock language={language} code={child.trim()} />;
        }
      }

      return <pre {...props}>{children}</pre>;
    },
  };
}
