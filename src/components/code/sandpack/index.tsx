'use client';

import { Sandpack } from '@codesandbox/sandpack-react';
import { githubLight, nightOwl } from '@codesandbox/sandpack-themes';
import { useTheme } from 'next-themes';

const sandpackLightTheme = {
  ...githubLight,
  colors: {
    ...githubLight.colors,
    surface1: '#fafafa',
    surface2: '#f3f4f6',
    surface3: '#e5e7eb',
    clickable: '#374151',
    base: '#111827',
    hover: '#e5e7eb',
    accent: '#8b5cf6',
  },
};

const sandpackDarkTheme = {
  ...nightOwl,
  colors: {
    ...nightOwl.colors,
    surface1: '#292d3e',
    surface2: '#2f3347',
    surface3: '#3a3f59',
    clickable: '#a6accd',
    base: '#eeffff',
    hover: '#3a3f59',
    accent: '#c792ea',
  },
  syntax: {
    ...nightOwl.syntax,
    plain: '#a6accd',
    comment: '#676e95',
    keyword: '#c792ea',
    tag: '#f07178',
    punctuation: '#89ddff',
    definition: '#82aaff',
    property: '#ffcb6b',
    static: '#f78c6c',
    string: '#c3e88d',
  },
};

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
  const { resolvedTheme } = useTheme();
  const sandpackTheme =
    resolvedTheme === 'dark' ? sandpackDarkTheme : sandpackLightTheme;

  return (
    <div className="code-sandbox my-6 rounded-lg overflow-hidden border border-border bg-card">
      <Sandpack
        template={template as 'react'}
        files={files}
        theme={sandpackTheme}
        customSetup={customSetup}
        options={{
          showNavigator: false,
          showTabs: false,
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
