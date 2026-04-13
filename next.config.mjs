import nextMDX from '@next/mdx';
import remarkSmartypants from 'remark-smartypants';

/** @type {import('next').NextConfig} */
const baseConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSmartypants],
  },
});

const nextConfig = withMDX(baseConfig);

export default nextConfig;
