import { Page } from '@/components/ui/page';
import type { Metadata } from 'next';
import { community, featuredProjects, openSource } from '@/content/projects';
import {
  CommunityRow,
  ContributionRow,
  ProjectRow,
} from '@/components/projects';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Things Yuri Mutti has built, contributed to, and maintained: products, open-source contributions and community work.',
};

export default function ProjectsPage() {
  return (
    <main>
      <Page>
        <header>
          <h1 className="text-lg font-medium text-foreground">Projects</h1>
          <p className="mt-2 max-w-prose leading-relaxed text-muted-foreground">
            Things I&apos;ve built, contributed to, and maintained.
          </p>
        </header>

        {featuredProjects.length > 0 && (
          <Section title="Featured Projects">
            <ul className="grid">
              {featuredProjects.map((project) => (
                <ProjectRow key={project.href} project={project} />
              ))}
            </ul>
          </Section>
        )}

        {openSource.length > 0 && (
          <Section title="Open Source">
            <ul className="grid">
              {openSource.map((contribution) => (
                <ContributionRow
                  key={contribution.project}
                  contribution={contribution}
                />
              ))}
            </ul>
          </Section>
        )}

        {community.length > 0 && (
          <Section title="Community">
            <ul className="grid">
              {community.map((item) => (
                <CommunityRow key={item.name} community={item} />
              ))}
            </ul>
          </Section>
        )}
      </Page>
    </main>
  );
}
