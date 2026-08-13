# AGENTS.md

Instructions for any AI coding agent working in this repository (Claude Code,
OpenAI Codex, Cursor, Copilot, Windsurf, Zed, and others). `AGENTS.md` is a
cross-tool convention: read this file first and follow it regardless of which
assistant you are. `CLAUDE.md` points here so Claude Code follows the same rules.

## What this is

`yurimutti.com`: a personal blog and portfolio built with Next.js (App Router),
TypeScript, Tailwind CSS v4, and MDX. Posts live at
`src/app/posts/<slug>/page.mdx`. Private notes live under `src/app/notes/`.

## Writing and editing blog posts

When creating or editing any post, follow the repo's writing skills. They are
plain Markdown, readable by any tool:

- Rewriting or cleaning up a draft: `.claude/skills/writing-technical-edit/SKILL.md`.
  Removes AI writing patterns (em dashes, "delve/leverage/robust", significance
  padding, "key takeaways" recaps, decorative emoji, duplicate title headings)
  while preserving the author's voice and every technical fact.
- Planning or drafting a new post: `.claude/skills/writing-blog-post/SKILL.md`
  and its `references/` (voice-and-style, technical-blog-structure,
  quality-checklist, nextjs-mdx).

Always run the writing-technical-edit pass before considering a post done.

Hard rules for post content:
- Preserve `meta`/`metadata` frontmatter, code blocks, Mermaid sources, links,
  and tables exactly unless the task is specifically about them.
- The page `<h1>` is rendered from `meta.title`. Never repeat the title as the
  first body heading.
- No em dash characters; straight quotes only; sentence-case headings.
- Never invent lived experience, metrics, quotes, or citations. Drafting or
  editing never authorizes publishing or changing `state` to `published`.

## House style for prose

Sound like a senior engineer with a point of view, not a polished assistant.
Start sections with the point. Cut sentences that only announce a topic, praise
a technology, or restate the previous paragraph. Prefer concrete commands, file
paths, versions, and real error messages over generic hype. Make a
recommendation instead of hedging when a call is possible.

## Development

- Package manager: Yarn (`yarn dev`, `yarn build`, `yarn lint`).
- Prettier config: single quotes, semicolons, `es5` trailing commas, 2-space
  indent. Format MDX before committing so the working tree stays clean.
- `husky` + `lint-staged` run `eslint --fix` and `prettier --write` on staged
  `*.{js,jsx,ts,tsx}`. Commit messages are validated by commitlint.

## Commit conventions

Conventional Commits, enforced by `@commitlint/config-conventional`:

- Format: `type(scope): subject` — type and scope lower-case, subject not
  Title-cased and no trailing period, header under 100 chars.
- Allowed types include: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`,
  `refactor`, `revert`, `style`, `test`, `translation`, `security`, `changeset`.
- Adding a post: `feat(posts): ...`. Editing post prose: `refactor(posts): ...`.
- Keep body lines under 100 characters, with a blank line before the body.
