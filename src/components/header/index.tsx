'use client';

import Link from 'next/link';
import { Avatar } from 'radix-ui';
import { ToggleLang } from '../toggle-lang';
import { ToggleTheme } from '../toggle-theme';

const GITHUB_AVATAR_URL =
  'https://avatars.githubusercontent.com/u/66539821?v=4&size=64';

export const Header = () => {
  return (
    <header className="w-full shadow-sm text-foreground">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between py-4">
          <div className="flex items-center gap-6">
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
              <ul className="flex gap-3">
                <li>
                  <Link
                    href="/blog"
                    className="px-2 py-1 transition-colors duration-200 hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="px-2 py-1 transition-colors duration-200 hover:text-primary"
                  >
                    Open Source
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-6 pt-4 *md:pt-0">
            <ToggleTheme />
            <ToggleLang />
          </div>
        </div>
      </div>
    </header>
  );
};
