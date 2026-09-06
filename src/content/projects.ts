// Project and contribution data rendered on the homepage and /projects.
//
// Everything here must be verifiable: a public repository, a merged pull
// request, or a link Yuri owns. Do not add placeholders. An empty group is
// simply not rendered.

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  description: string;
  year: number;
  href: string;
  links?: ProjectLink[];
};

export type Contribution = {
  project: string;
  description: string;
  detail?: string;
  links: ProjectLink[];
};

export type Community = {
  name: string;
  role: string;
  since: number;
  description: string;
  href?: string;
};

export const featuredProjects: Project[] = [
  {
    name: 'VelaChess',
    description:
      'Imports your chess games, builds a repertoire from how you actually play, and turns the positions that matter into spaced-repetition exercises.',
    year: 2026,
    href: 'https://velachess.com',
    links: [
      { label: 'Source', href: 'https://github.com/velachess/velachess' },
    ],
  },
  {
    name: 'recursos-frontend',
    description:
      'A curated list of libraries, tools and references for frontend developers, in Portuguese. 1.5k+ stars on GitHub.',
    year: 2025,
    href: 'https://github.com/yurimutti/recursos-frontend',
  },
  {
    name: 'nextjs-loglayer',
    description:
      'Reference setup for structured logging in Next.js: one logger across server, client and edge, with console.* intercepted in instrumentation.ts.',
    year: 2026,
    href: 'https://github.com/yurimutti/nextjs-loglayer',
    links: [
      {
        label: 'Article',
        href: '/posts/logging-nextjs-loglayer-instrumentation-console-override-structured-logs',
      },
    ],
  },
];

export const openSource: Contribution[] = [
  {
    project: 'Supabase',
    description:
      "Fixed a stale-state bug in the Studio Table Editor's copy-cell action.",
    links: [
      {
        label: 'Merged PR #17686',
        href: 'https://github.com/supabase/supabase/pull/17686',
      },
    ],
  },
  {
    project: 'Strapi',
    description:
      'Migrated helper-plugin hooks and components to TypeScript across 6 merged PRs.',
    links: [
      {
        label: 'Merged PRs',
        href: 'https://github.com/strapi/strapi/pulls?q=is%3Apr+author%3Ayurimutti+is%3Amerged',
      },
    ],
  },
];

export const community: Community[] = [
  {
    name: 'Nullspace',
    role: 'Founder & Community Maintainer',
    since: 2023,
    description:
      'A developer community of 500+ members focused on career growth, open source and knowledge sharing. Live coding sessions, technical talks and English-practice meetups.',
    href: 'https://link.yurimutti.com/community',
  },
];
