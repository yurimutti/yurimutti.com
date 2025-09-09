'use client';

import { Sandpack } from '@codesandbox/sandpack-react';
import { dracula } from '@codesandbox/sandpack-themes';

interface SandpackWrapperProps {
  files?: Record<string, string>;
  template?: string;
  customSetup?: {
    dependencies?: Record<string, string>;
  };
}

export function SandpackWrapper({
  files = {
    '/App.js': `export default function App() {
  return <h1>Hello World</h1>
}`,
  },
  template = 'react',
  customSetup,
}: SandpackWrapperProps) {
  return (
    <div className="my-6">
      <Sandpack
        template={template as 'react'}
        files={files}
        theme={dracula}
        customSetup={customSetup}
        options={{
          showNavigator: true,
          showTabs: true,
          showLineNumbers: true,
          editorHeight: 400,
        }}
      />
    </div>
  );
}

interface CodeSandboxProps {
  children?: string;
  template?: string;
  dependencies?: Record<string, string>;
}

export function CodeSandbox({
  children = `export default function App() {
  return <h1>Hello World</h1>
}`,
  template = 'react',
  dependencies = {},
}: CodeSandboxProps) {
  const files = {
    '/App.js': children.trim(),
  };

  return (
    <SandpackWrapper
      files={files}
      template={template}
      customSetup={{ dependencies }}
    />
  );
}
