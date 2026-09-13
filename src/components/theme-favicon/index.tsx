'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * Keeps the tab icon in step with the site theme toggle.
 *
 * `app/icon.svg` already switches with the OS theme through a media query,
 * which covers first paint and no-JS. But the toggle can put the site in
 * light while the OS is dark (or the reverse), and a media query cannot see
 * that. So once the theme resolves on the client, point the existing
 * <link rel="icon"> at the matching static variant in /public.
 */
export const ThemeFavicon = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) return;
    link.href = resolvedTheme === 'dark' ? '/icon-dark.svg' : '/icon-light.svg';
  }, [resolvedTheme]);

  return null;
};
