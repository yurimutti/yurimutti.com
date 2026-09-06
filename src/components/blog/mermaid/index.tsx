'use client';

import mermaid from 'mermaid';
import { useEffect, useId, useRef } from 'react';
import { useTheme } from 'next-themes';

type MermaidProps = {
  source: string;
};

/**
 * Neutral theme built on Mermaid's `base` theme. Mermaid only accepts hex
 * colors here, so these mirror the site tokens in globals.css:
 * foreground / muted-foreground / border / card for each mode. Nothing is
 * colored for decoration; shape, dashes and arrowheads carry the meaning.
 */
const themeVariables = (dark: boolean) =>
  dark
    ? {
        darkMode: true,
        background: '#1c1e26',
        mainBkg: '#26262b',
        primaryColor: '#26262b',
        primaryTextColor: '#f4f4f5',
        primaryBorderColor: '#3f3f46',
        secondaryColor: '#1f1f23',
        secondaryTextColor: '#f4f4f5',
        secondaryBorderColor: '#3f3f46',
        tertiaryColor: '#1f1f23',
        tertiaryTextColor: '#f4f4f5',
        tertiaryBorderColor: '#3f3f46',
        nodeBorder: '#3f3f46',
        nodeTextColor: '#f4f4f5',
        lineColor: '#a1a1aa',
        textColor: '#d4d4d8',
        titleColor: '#f4f4f5',
        clusterBkg: '#1f1f23',
        clusterBorder: '#3f3f46',
        edgeLabelBackground: '#1f1f23',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
        fontSize: '14px',
      }
    : {
        darkMode: false,
        background: '#ffffff',
        mainBkg: '#ffffff',
        primaryColor: '#ffffff',
        primaryTextColor: '#18181b',
        primaryBorderColor: '#d4d4d8',
        secondaryColor: '#f4f4f5',
        secondaryTextColor: '#18181b',
        secondaryBorderColor: '#d4d4d8',
        tertiaryColor: '#f4f4f5',
        tertiaryTextColor: '#18181b',
        tertiaryBorderColor: '#d4d4d8',
        nodeBorder: '#d4d4d8',
        nodeTextColor: '#18181b',
        lineColor: '#71717a',
        textColor: '#52525b',
        titleColor: '#18181b',
        clusterBkg: '#f4f4f5',
        clusterBorder: '#e4e4e7',
        edgeLabelBackground: '#f4f4f5',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
        fontSize: '14px',
      };

export function Mermaid({ source }: MermaidProps) {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const reactId = useId();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;

    const initializeMermaid = async () => {
      if (!mermaidRef.current) {
        return;
      }

      mermaidRef.current.innerHTML = source;

      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: themeVariables(resolvedTheme === 'dark'),
        // Natural-size SVG with a viewBox; globals.css scales it to the
        // column and switches to horizontal scroll on narrow screens.
        flowchart: { useMaxWidth: false, htmlLabels: true, padding: 12 },
      });

      try {
        const renderId = `mermaid-diagram-${reactId.replace(/:/g, '')}`;
        const { svg, bindFunctions } = await mermaid.render(renderId, source);

        if (cancelled || !mermaidRef.current) {
          return;
        }

        mermaidRef.current.innerHTML = svg;
        bindFunctions?.(mermaidRef.current);
      } catch {
        if (!cancelled && mermaidRef.current) {
          mermaidRef.current.textContent = source;
        }
      }
    };

    void initializeMermaid();

    return () => {
      cancelled = true;
    };
  }, [source, reactId, resolvedTheme]);

  return (
    <figure className="mermaid-diagram">
      <div ref={mermaidRef} />
    </figure>
  );
}
