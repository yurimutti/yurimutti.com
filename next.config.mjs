import nextMDX from '@next/mdx';
import remarkSmartypants from 'remark-smartypants';

const isDev = process.env.NODE_ENV === 'development';

// Content Security Policy.
//
// Follows the "Without Nonces" recipe from the Next.js docs
// (https://nextjs.org/docs/app/guides/content-security-policy). A nonce-based
// policy would be stricter, but it requires every page to be dynamically
// rendered, which would drop static generation and CDN caching for the whole
// blog. 'unsafe-inline' is needed for the scripts Next.js and next-themes
// inline into the HTML, and for the JSON-LD blocks.
//
// Third parties in use:
//   - cloud.umami.is         analytics script + beacon
//   - *.codesandbox.io       Sandpack bundler iframe in posts
//
// In development React uses eval for error overlays and the dev server talks
// over a websocket, so both are allowed only when NODE_ENV=development.
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://cloud.umami.is${isDev ? " 'unsafe-eval'" : ''};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    connect-src 'self' https://cloud.umami.is https://*.codesandbox.io${isDev ? ' ws: wss:' : ''};
    frame-src 'self' https://*.codesandbox.io;
    worker-src 'self' blob:;
    manifest-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: cspHeader.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
];

/** @type {import('next').NextConfig} */
const baseConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  productionBrowserSourceMaps: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSmartypants],
  },
});

const nextConfig = withMDX(baseConfig);

export default nextConfig;
