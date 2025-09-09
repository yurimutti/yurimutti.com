'use client';

import { MdNightlight, MdWbSunny } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';

export const ToggleTheme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const handleToggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  if (!resolvedTheme) {
    return <div className="w-10 h-10 p-2" />;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.button
        key={theme}
        onClick={handleToggleTheme}
        className="cursor-pointer flex items-center justify-center w-10 h-10 p-2 transition-colors duration-300 rounded-md hover:bg-[hsl(var(--accent)/0.15)]"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          color: 'hsl(var(--foreground))',
        }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <MdWbSunny className="w-6 h-6" />
        ) : (
          <MdNightlight className="w-6 h-6" />
        )}
      </motion.button>
    </AnimatePresence>
  );
};
