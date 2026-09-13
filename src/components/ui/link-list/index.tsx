import Link from 'next/link';
import type { ReactNode } from 'react';

export type ActionLink = {
  label: string;
  href: string;
};

export const isExternal = (href: string) => /^https?:\/\//.test(href);

/** Internal links go through next/link, external ones open in a new tab. */
export function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/**
 * Explicit destinations under a row, as plain text: "Source  Article".
 * Renders nothing when there is nothing to link, so a row without
 * destinations simply ends after its text.
 */
export function LinkList({ links }: { links: ActionLink[] }) {
  if (links.length === 0) return null;

  return (
    <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <SmartLink href={link.href} className="link-secondary">
            {link.label}
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}
