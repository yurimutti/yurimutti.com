import { prodUrl } from './sitemap';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${prodUrl}/sitemap.xml`,
  };
}
