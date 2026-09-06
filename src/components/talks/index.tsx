import type { Appearance, Talk } from '@/content/talks';
import { talkYear } from '@/content/talks';
import { LinkList, type ActionLink } from '@/components/ui/link-list';

/** Watch, then Slides, then Event. Only what exists. */
const actionsFor = (a: Appearance): ActionLink[] => {
  const links: ActionLink[] = [];
  if (a.videoUrl) links.push({ label: 'Watch', href: a.videoUrl });
  if (a.slidesUrl)
    links.push({ label: a.slidesLabel ?? 'Slides', href: a.slidesUrl });
  if (a.eventUrl) links.push({ label: 'Event', href: a.eventUrl });
  return links;
};

/** "Recife, Brazil · 2024". Either part may be missing. */
const meta = (a: Appearance) =>
  [a.location, a.date].filter(Boolean).join(' · ');

/** Compact homepage row: title + year, event, links. Nothing else. */
export function TalkRow({ talk }: { talk: Talk }) {
  const latest = talk.appearances[0];
  const year = talkYear(talk);

  return (
    <li className="py-3">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium text-foreground">{talk.title}</h3>
        {year && (
          <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
            {year}
          </span>
        )}
      </div>
      {latest && (
        <>
          <p className="mt-1 text-sm text-muted-foreground">{latest.event}</p>
          <LinkList links={actionsFor(latest)} />
        </>
      )}
    </li>
  );
}

/** Full entry for /speaking: talk, description, every appearance. */
export function TalkEntry({ talk }: { talk: Talk }) {
  return (
    <li className="py-3">
      <h3 className="font-medium text-foreground">{talk.title}</h3>
      <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted-foreground">
        {talk.description}
      </p>
      <ul className="mt-4 grid gap-4">
        {talk.appearances.map((a) => (
          <li key={`${a.event}-${a.date}`}>
            <p className="text-sm text-foreground">{a.event}</p>
            {meta(a) && (
              <p className="mt-0.5 text-sm text-muted-foreground">{meta(a)}</p>
            )}
            <LinkList links={actionsFor(a)} />
          </li>
        ))}
      </ul>
    </li>
  );
}
