'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

const lightThemeVars = {
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
};

const darkThemeVars = {
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
};

export function MermaidInit() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('pre.mermaid');

    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.minHeight = '120px';

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
        theme: 'base',
        flowchart: { useMaxWidth: true, htmlLabels: true },
        themeVariables:
          resolvedTheme === 'dark' ? darkThemeVars : lightThemeVars,
      });

      await mermaid.run({ querySelector: 'pre.mermaid' });

      document.querySelectorAll<HTMLElement>('pre.mermaid').forEach((el) => {
        el.style.transition = 'opacity 0.3s ease';
        el.style.opacity = '1';
        el.style.minHeight = '';
      });
    });
  }, [resolvedTheme]);

  return null;
}
