import type { Metadata } from 'next';
import { Page } from '@/components/ui/page';
import { TalkEntry } from '@/components/talks';
import { talks } from '@/content/talks';

export const metadata: Metadata = {
  title: 'Talks',
  description:
    'Talks and workshops by Yuri Mutti about frontend engineering, product development, open source, and the things learned while building software.',
};

export default function SpeakingPage() {
  return (
    <main>
      <Page>
        <header>
          <h1 className="text-lg font-medium text-foreground">Talks</h1>
          <p className="mt-2 max-w-prose leading-relaxed text-muted-foreground">
            Talks and workshops about frontend engineering, product development,
            open source, and the things I learn while building software.
          </p>
        </header>

        {talks.length > 0 && (
          <ul className="grid gap-6">
            {talks.map((talk) => (
              <TalkEntry key={talk.title} talk={talk} />
            ))}
          </ul>
        )}
      </Page>
    </main>
  );
}
