import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/libs/utils';

interface SectionProps {
  title: string;
  /** Rendered on the right of the heading, e.g. a "View all" link. */
  action?: ReactNode;
  /** Use `h1` on index pages where the section is the page itself. */
  as?: 'h1' | 'h2';
  className?: string;
  children: ReactNode;
}

/**
 * A content section with a restrained heading. Hierarchy comes from spacing
 * and weight, not from color or containers.
 */
export function Section({
  title,
  action,
  as: Heading = 'h2',
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn('grid gap-4', className)}>
      <div className="flex items-baseline justify-between gap-4">
        <Heading className="text-base font-medium text-foreground">
          {title}
        </Heading>
        {action}
      </div>
      {children}
    </section>
  );
}

interface SectionLinkProps {
  href: string;
  children: ReactNode;
}

/** A quiet secondary link, typically "View all ...". */
export function SectionLink({ href, children }: SectionLinkProps) {
  return (
    <Link href={href} className="link-secondary text-sm">
      {children}
    </Link>
  );
}
