import { cn } from '@/libs/utils';

interface LinkArrowProps {
  /** Use `↗` for links that leave the site, `→` for internal navigation. */
  external?: boolean;
  /** When true the arrow is always visible (for short inline links). */
  always?: boolean;
  className?: string;
}

/**
 * The single hover affordance used across the site. Two modes:
 * - default: hidden, fades in when the parent `.group` is hovered or focused
 *   (used on rows that are entirely a link, e.g. article rows);
 * - `always`: visible at rest so the text reads as a destination, and nudges
 *   1px in the direction it points on hover (used on titles and inline links).
 * No underline, no background, no hover surface.
 */
export function LinkArrow({ external, always, className }: LinkArrowProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'ml-1 inline-block text-muted-foreground duration-200 motion-reduce:transition-none motion-reduce:transform-none',
        always
          ? // Always visible; nudges by 1px in the direction it points on hover.
            cn(
              'transition-transform group-hover:translate-x-px',
              external && 'group-hover:-translate-y-px'
            )
          : 'opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100',
        className
      )}
    >
      {external ? '↗' : '→'}
    </span>
  );
}
