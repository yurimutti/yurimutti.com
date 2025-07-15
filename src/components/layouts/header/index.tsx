'use client';

import Link from 'next/link';
import { Avatar } from '@/components/ui/avatar';
import { ToggleLang } from '../../toggle-lang';
import { ToggleTheme } from '../../toggle-theme';

const GITHUB_AVATAR_URL =
  'https://avatars.githubusercontent.com/u/66539821?v=4&size=64';

const NAV_LINKS = [{ label: 'Blog', href: '/posts' }];

export const Header = () => {
  return (
    <header className="w-full shadow-sm text-foreground">
      <div className="max-w-screen-md px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="flex gap-5">
                <Avatar.Root className="inline-flex size-[32px] select-none items-center justify-center overflow-hidden rounded-full bg-foreground/10">
                  <Avatar.Image
                    className="size-full rounded-[inherit] object-cover"
                    src={GITHUB_AVATAR_URL}
                    alt="Yuri Mutti"
                  />
                  <Avatar.Fallback
                    className="leading-1 flex size-full items-center justify-center bg-background text-[15px] font-medium text-foreground"
                    delayMs={600}
                  >
                    YM
                  </Avatar.Fallback>
                </Avatar.Root>
              </div>

              <span className="text-xl font-bold tracking-wider uppercase transition-all duration-300 ease-in-out rounded font-heading sm:text-base">
                Yuri Mutti
              </span>
            </Link>

            <nav>
              <ul className="flex items-center gap-3">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="px-2 py-1 transition-colors duration-200 hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <ToggleTheme />
            <ToggleLang />
          </div>
        </div>
      </div>
    </header>
  );
};
