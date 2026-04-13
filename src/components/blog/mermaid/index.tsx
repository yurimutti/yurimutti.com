'use client';

import mermaid from 'mermaid';
import { useEffect, useId, useRef } from 'react';
import { useTheme } from 'next-themes';

type MermaidProps = {
  source: string;
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
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
        flowchart: { useMaxWidth: true, htmlLabels: true },
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

  return <div className="mermaid-diagram" ref={mermaidRef} />;
}
