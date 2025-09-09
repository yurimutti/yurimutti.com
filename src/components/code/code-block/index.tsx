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
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  });

  return (
    <div className="my-6">
      {filename && (
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 border border-b-0 border-gray-200 dark:border-gray-700 rounded-t-lg">
          {filename}
        </div>
      )}
      <div
        className={`overflow-x-auto ${filename ? 'rounded-b-lg' : 'rounded-lg'}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
