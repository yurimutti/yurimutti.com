import { CopyButton } from '@/components/copy-button';
import { BundledLanguage, BundledTheme, codeToHtml } from 'shiki';
import { transformerNotationHighlight } from '@shikijs/transformers';

export async function CodeBlock({
  code,
  language = 'javascript',
  theme = 'dracula',
  filename,
}: {
  code: string;
  language?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
}) {
  const html = await codeToHtml(code, {
    lang: language,
    theme,
    transformers: [transformerNotationHighlight()],
  });

  return (
    <div className="my-6">
      <div className="bg-neutral-800">
        {filename && (
          <div className="inline-flex bg-neutral-900 px-4 py-2 text-sm">
            {filename}
          </div>
        )}
      </div>
      <div className="relative">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {!filename && (
          <div className="absolute top-2 right-2 z-10">
            <CopyButton code={code} />
          </div>
        )}
      </div>
    </div>
  );
}
