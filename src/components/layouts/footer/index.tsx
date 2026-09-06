const LINKS = [
  { label: 'GitHub', href: 'https://github.com/yurimutti' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yurimutti/' },
  { label: 'Email', href: 'mailto:muttiyuri@gmail.com' },
] as const;

export const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-screen-md px-4 py-8">
      <ul className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
        {LINKS.map(({ label, href }, index) => (
          <li key={href} className="flex items-center gap-x-2">
            {index > 0 && <span aria-hidden="true">·</span>}
            <a
              href={href}
              {...(href.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
              className="rounded-sm outline-none transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
