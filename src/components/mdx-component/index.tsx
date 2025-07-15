import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

// TODO: Add more components as needed and move a mroe aporpriate place

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image,
  };
}
