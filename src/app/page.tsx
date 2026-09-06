import { Page } from '@/components/ui/page';
import { getBlogPosts } from '@/utils/blog';
import { prodUrl } from './sitemap';
import { featuredProjects } from '@/content/projects';
import { PostList } from '@/components/blog/post/post-row';
import { ProjectRow } from '@/components/projects';
import { TalkRow } from '@/components/talks';
import { talks } from '@/content/talks';
import { Section, SectionLink } from '@/components/ui/section';

const description =
  'Software engineer focused on frontend and product engineering. I build web and mobile products, contribute to open source, and write about the things I learn along the way.';

export const metadata = {
  title: {
    absolute: 'Yuri Mutti',
  },
  authors: [{ name: 'Yuri Mutti' }],
  description,
  openGraph: {
    type: 'website',
    title: 'Yuri Mutti',
    description,
    images: ['https://yurimutti.com/assets/brand/yurimutti.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Home() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Yuri Mutti',
              url: prodUrl,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Yuri Mutti',
              url: prodUrl,
              sameAs: [
                'https://github.com/yurimutti',
                'https://www.linkedin.com/in/yurimutti',
              ],
            },
          ]),
        }}
      />

      <Page>
        <section>
          {/* Visually hidden: the name is already in the header, but the page
              still needs an h1 for assistive tech and the document outline. */}
          <h1 className="sr-only">Yuri Mutti</h1>
          <p className="max-w-prose leading-relaxed text-muted-foreground">
            {description}
          </p>
        </section>

        {featuredProjects.length > 0 && (
          <Section
            title="Projects"
            action={
              <SectionLink href="/projects">View all projects →</SectionLink>
            }
          >
            <ul className="grid">
              {featuredProjects.map((project) => (
                <ProjectRow key={project.href} project={project} />
              ))}
            </ul>
          </Section>
        )}

        <Section
          title="Writing"
          action={<SectionLink href="/posts">View all posts →</SectionLink>}
        >
          <PostList posts={posts} />
        </Section>

        {talks.length > 0 && (
          <Section
            title="Speaking"
            action={
              <SectionLink href="/speaking">View all talks →</SectionLink>
            }
          >
            <ul className="grid">
              {talks.slice(0, 3).map((talk) => (
                <TalkRow key={talk.title} talk={talk} />
              ))}
            </ul>
          </Section>
        )}
      </Page>
    </main>
  );
}
