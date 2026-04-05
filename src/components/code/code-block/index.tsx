import { CopyButton } from '@/components/copy-button';
import { BundledLanguage, BundledTheme, codeToHtml } from 'shiki';
import { transformerNotationHighlight } from '@shikijs/transformers';

const defaultThemes = {
  light: 'github-light',
  dark: 'material-theme-palenight',
} as const;

export async function CodeBlock({
  code,
  language = 'javascript',
  theme,
  filename,
}: {
  code: string;
  language?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
}) {
  const html = await codeToHtml(code, {
    lang: language,
    ...(theme
      ? { theme }
      : { themes: defaultThemes, defaultColor: 'light' as const }),
    transformers: [transformerNotationHighlight()],
  });

  return (
    <div className="my-6">
      <div className="rounded-lg overflow-hidden border border-border bg-card">
        {filename && (
          <div className="inline-flex bg-muted/40 text-muted-foreground px-4 py-2 text-sm border-b border-r border-border">
            {filename}
          </div>
        )}
        <div className="relative">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {!filename && (
            <div className="absolute top-2 right-2 z-10">
              <CopyButton code={code} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
