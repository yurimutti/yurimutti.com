'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

/**
 * Half-filled circle. The same glyph is used in both modes: it is a control,
 * not a status indicator, and the accessible name says what it will do.
 */
const HalfCircle = () => (
  <svg
    viewBox="0 0 16 16"
    width="16"
    height="16"
    aria-hidden="true"
    focusable="false"
  >
    <circle
      cx="8"
      cy="8"
      r="6.25"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
  </svg>
);

export const ToggleTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // The glyph is identical in both themes, so it renders on the server and
  // never pops in. Only the label waits for the resolved theme; until then
  // it is a neutral one, which keeps server and client markup identical.
  const isDark = resolvedTheme === 'dark';
  const label = !mounted
    ? 'Toggle theme'
    : isDark
      ? 'Switch to light mode'
      : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={label}
      title={label}
      className="flex size-6 cursor-pointer items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none"
    >
      <HalfCircle />
    </button>
  );
};
