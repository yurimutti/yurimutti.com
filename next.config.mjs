import nextMDX from '@next/mdx';
import rehypeMermaid from 'rehype-mermaid';
import remarkSmartypants from 'remark-smartypants';

/** @type {import('next').NextConfig} */
const baseConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSmartypants],
    rehypePlugins: [
      [
        rehypeMermaid,
        {
          strategy: 'img-svg',
          colorScheme: 'light',
          mermaidConfig: {
            theme: 'base',
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
            },
            themeVariables: {
              background: '#ffffff',
              primaryColor: '#fafafa',
              primaryTextColor: '#171821',
              primaryBorderColor: '#7c3aed',
              secondaryColor: '#fafafa',
              secondaryTextColor: '#171821',
              secondaryBorderColor: '#596579',
              tertiaryColor: '#f8fafc',
              tertiaryTextColor: '#171821',
              tertiaryBorderColor: '#596579',
              lineColor: '#596579',
              textColor: '#171821',
              mainBkg: '#fafafa',
              nodeBorder: '#596579',
              clusterBkg: '#ffffff',
              clusterBorder: '#596579',
              edgeLabelBackground: '#ffffff',
              defaultLinkColor: '#596579',
              fontSize: '16px',
              fontFamily: 'Inter, sans-serif',
            },
          },
          dark: {
            theme: 'base',
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
            },
            themeVariables: {
              background: '#1c1e26',
              primaryColor: '#1f232f',
              primaryTextColor: '#fafafa',
              primaryBorderColor: '#f06292',
              secondaryColor: '#1f232f',
              secondaryTextColor: '#fafafa',
              secondaryBorderColor: '#2e3445',
              tertiaryColor: '#2a1f2f',
              tertiaryTextColor: '#cccccc',
              tertiaryBorderColor: '#2e3445',
              lineColor: '#2e3445',
              textColor: '#fafafa',
              mainBkg: '#1f232f',
              nodeBorder: '#2e3445',
              clusterBkg: '#1c1e26',
              clusterBorder: '#2e3445',
              edgeLabelBackground: '#1c1e26',
              defaultLinkColor: '#2e3445',
              fontSize: '16px',
              fontFamily: 'Inter, sans-serif',
            },
          },
        },
      ],
    ],
  },
});

const nextConfig = withMDX(baseConfig);

export default nextConfig;
