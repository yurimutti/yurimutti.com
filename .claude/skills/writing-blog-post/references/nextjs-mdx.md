# Next.js MDX conventions (yurimutti.com)

This blog renders MDX through the Next.js App Router. Posts are not plain
Markdown with YAML frontmatter; they are MDX modules that export objects and
wrap content in a component.

## File location and slug

- One post per folder: `src/app/posts/<slug>/page.mdx`.
- The folder name is the URL slug. Keep it explicit and searchable.
- Private notes live under `src/app/notes/` and are not public posts.

## Frontmatter is exported JavaScript

Each post starts with an import and two exported objects:

```mdx
import { BlogPost } from '@/components/blog/post';

export const meta = {
  title: 'Explicit, searchable title',
  summary: 'One or two sentences describing what the reader gets.',
  publishedAt: '2026-04-12',
  state: 'published',
  views: 0,
  readingTime: '10 min read',
  tags: ['Next.js', 'Observability'],
};

export const metadata = {
  title: `${meta.title} | Yuri Mutti`,
  description: meta.summary,
};

<BlogPost meta={meta}>

...post body...

</BlogPost>
```

- `state` is `'draft' | 'published' | 'archived'`. Non-published states render a
  banner; do not set `'published'` without authorization.
- `publishedAt` is `YYYY-MM-DD`.
- When editing an existing post, preserve `meta` and `metadata` exactly unless
  the task is specifically about frontmatter.

## The title is already an H1

`BlogPost` renders `meta.title` as the page `<h1>`. Do not repeat the title as
the first heading in the body. Open with a paragraph that states the thesis, or
with the first `##` section. A body heading that restates the title is a
duplicate and should be removed.

## Headings

- Body sections use `##` and `###`. Reserve H1 for the title.
- Sentence case: "How to configure the cache", not "How To Configure The Cache".
  Proper nouns keep their casing.

## Prose conventions

- No em dash characters. Use a comma, colon, parentheses, or a new sentence.
- Straight quotes and apostrophes only (`"` `'`), never curly.
- These match the author's existing posts. Keep them.

## Code, diagrams, and playgrounds

- Fenced code blocks need a language tag. A `ts`/`tsx`/`bash`/`txt`/`text` fence
  renders through the `CodeBlock` component (Shiki, Dracula theme).
- A ` ```mermaid ` fence renders as a diagram via the `Mermaid` component.
- Live, editable examples are available through `SandpackWrapper` / `CodeSandbox`
  from `mdx-components.tsx` when a post needs them.
- Preserve code fences, Mermaid sources, links, and tables exactly when editing.

## References

Close with a horizontal rule and a numbered list of primary sources:

```mdx
<hr />

1. [https://nextjs.org/docs/app/guides/instrumentation](https://nextjs.org/docs/app/guides/instrumentation)
2. [https://loglayer.dev](https://loglayer.dev)
```

## Validate

- `yarn lint` and `yarn build` should pass.
- Prettier runs on staged `*.{js,jsx,ts,tsx}` via lint-staged; format MDX before
  committing so the working tree stays clean.
