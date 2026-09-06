'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/libs/utils';
import { ToggleTheme } from '../../toggle-theme';

const NAV_LINKS = [
  { label: 'Writing', href: '/posts' },
  { label: 'Projects', href: '/projects' },
] as const;

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-screen-md items-center justify-between px-4 py-8">
        <Link
          href="/"
          className="rounded-sm font-medium text-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
        >
          Yuri Mutti
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-center gap-5 text-sm">
            {NAV_LINKS.map(({ label, href }) => {
              const active =
                pathname === href || pathname.startsWith(`${href}/`);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-sm outline-none transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none',
                      active ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="flex">
              <ToggleTheme />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
