// Talks, organized talk-first: one entry per talk, one appearance per event
// it was given at. Only verifiable facts. Optional fields are simply not
// rendered when absent; a talk with no links ends after its text.

export type Appearance = {
  event: string;
  /** Free-form, as precise as the source allows: "Sep 2024" or "2024". */
  date: string;
  location?: string;
  /** Rendered in priority order: Watch, Slides, Event. */
  videoUrl?: string;
  slidesUrl?: string;
  /** Overrides the "Slides" label, e.g. to flag the deck language. */
  slidesLabel?: string;
  eventUrl?: string;
  /** Overrides the "Event" label when the link is not an event page. */
  eventLabel?: string;
};

export type Talk = {
  title: string;
  /** Shown on /speaking. The homepage row is title, event and links only. */
  description: string;
  appearances: Appearance[];
};

/** Year of the most recent appearance, for the right-aligned year in lists. */
export const talkYear = (talk: Talk): number | undefined => {
  const years = talk.appearances
    .map((a) => Number((a.date.match(/\d{4}/) ?? [])[0]))
    .filter((y) => !Number.isNaN(y));
  return years.length ? Math.max(...years) : undefined;
};

export const talks: Talk[] = [
  {
    title: 'Blockchain for Sustainability and Waste Management',
    description:
      'Representing DeTrash on the Palco Futuros stage, a track about sustainability, emerging technologies and new digital economies at one of the largest Web3 events in Latin America. The talk covered blockchain applied to waste management, why incentives move green actions further than punishment and control, transparency in recycling operations, financial inclusion for the people in the recycling chain, and the Recy Certificate and cRECY digital asset as the economic layer that ties it together.',
    appearances: [
      {
        event: 'NFT Brasil 2024 (now TokenNation Brasil)',
        date: 'Sep 2024',
        location: 'São Paulo, Brazil',
        eventUrl: 'https://www.sympla.com.br/evento/nft-brasil-2024/2560316',
      },
    ],
  },
  {
    title: 'My Journey as a Software Developer',
    description:
      'Guest talk for technical students about my journey into software engineering, career transitions, open source, community involvement, and practical advice for people starting in technology. The deck is in Portuguese.',
    appearances: [
      {
        event: 'Escola Técnica Estadual Cícero Dias — NAVE Recife',
        date: '2024',
        location: 'Recife, Brazil',
        slidesUrl:
          'https://docs.google.com/presentation/d/1trcXiMwWgM66DRgyvB9sRWNnKiOozMB8GbCvYbPxqQ0/edit?usp=sharing',
        slidesLabel: 'Slides (PT-BR)',
        eventUrl: 'https://www.instagram.com/naverecife/',
        eventLabel: 'Instagram',
      },
    ],
  },
];
