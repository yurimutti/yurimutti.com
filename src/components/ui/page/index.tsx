import type { ReactNode } from 'react';
import { cn } from '@/libs/utils';

interface PageProps {
  className?: string;
  children: ReactNode;
}

/**
 * The single vertical rhythm for every page.
 *
 *   header text to first block   96px mobile / 112px desktop
 *   between major sections       64px mobile /  80px desktop
 *   last block to footer text     96px mobile / 112px desktop
 *
 * The header and footer each carry 32px of their own padding, so this
 * container adds 64/80 on both ends to land on those numbers. Change the
 * values here, not per page.
 */
export function Page({ className, children }: PageProps) {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-screen-md gap-16 px-4 py-16 sm:gap-20 sm:py-20',
        className
      )}
    >
      {children}
    </div>
  );
}
