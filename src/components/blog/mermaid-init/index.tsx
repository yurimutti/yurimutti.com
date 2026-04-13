'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function MermaidInit() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('pre.mermaid');

    elements.forEach((el) => {
      if (!el.hasAttribute('data-mermaid-source')) {
        el.setAttribute('data-mermaid-source', el.textContent || '');
      } else {
        el.textContent = el.getAttribute('data-mermaid-source')!;
        el.removeAttribute('data-processed');
      }
    });

    import('mermaid').then(async (mod) => {
      const mermaid = mod.default;

      mermaid.initialize({
        startOnLoad: false,
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
        flowchart: { useMaxWidth: true, htmlLabels: true },
      });

      await mermaid.run({ querySelector: 'pre.mermaid' });
    });
  }, [resolvedTheme]);

  return null;
}
