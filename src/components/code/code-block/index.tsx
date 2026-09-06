import { CopyButton } from '@/components/copy-button';
import { BundledLanguage, BundledTheme, codeToHtml } from 'shiki';
import { transformerNotationHighlight } from '@shikijs/transformers';

// Both are neutral GitHub themes. The block background comes from our own
// `--code-block-bg` token (see globals.css); Shiki only colors the tokens.
const defaultThemes = {
  light: 'github-light',
  dark: 'github-dark-dimmed',
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
    <div className="my-6 overflow-hidden rounded-md border border-code-block-border bg-code-block-bg">
      {filename ? (
        <div className="flex items-center justify-between gap-4 border-b border-code-block-border px-4 py-2">
          <span className="truncate font-mono text-xs text-muted-foreground">
            {filename}
          </span>
          <CopyButton code={code} />
        </div>
      ) : null}
      <div className="relative">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {!filename && (
          <div className="absolute top-2 right-2">
            <CopyButton code={code} />
          </div>
        )}
      </div>
    </div>
  );
}
