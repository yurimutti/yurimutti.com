'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

/**
 * The favicon follows the site theme, not only the OS scheme.
 *
 * React 19 hoists a <link> rendered here into <head>, so this component is
 * the single owner of the icon link. On the server (and before hydration)
 * it points at /icon.svg, whose internal prefers-color-scheme rule matches
 * the OS; once next-themes resolves, it switches to the light or dark file.
 * Owning the link avoids the duplicate that appears when a script mutates a
 * link Next.js rendered itself.
 */
export const ThemeFavicon = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const href =
    mounted && resolvedTheme ? `/icon-${resolvedTheme}.svg` : '/icon.svg';

  return <link rel="icon" type="image/svg+xml" href={href} />;
};
