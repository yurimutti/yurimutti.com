import { CopyButton } from '@/components/copy-button';
import { codeToHtml } from 'shiki';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export async function CodeBlock({
  children,
  language = 'text',
  filename,
}: CodeBlockProps) {
  const html = await codeToHtml(children, {
    lang: language,
    theme: 'dracula',
    transformers: [
      {
        pre(node) {
          node.properties.style =
            'white-space: pre-wrap; word-break: break-all; overflow-wrap: anywhere; background: transparent !important; padding: 1rem; font-size: 0.875rem; line-height: 1.25rem;';
        },
      },
    ],
  });

  return (
    <div className="my-6">
      <div className="relative">
        {filename && (
          <div className="bg-[#21222c] px-4 py-2 text-sm text-[#f8f8f2] border border-b-0 border-[#44475a] rounded-t-lg flex items-center justify-between">
            <span>{filename}</span>
            <CopyButton code={children} />
          </div>
        )}
        <div
          className={`overflow-x-auto bg-[#282a36] border border-[#44475a] relative ${filename ? 'rounded-b-lg border-t-0' : 'rounded-lg'}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {!filename && (
          <div className="absolute top-2 right-2">
            <CopyButton code={children} />
          </div>
        )}
      </div>
    </div>
  );
}
