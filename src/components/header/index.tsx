'use client';

import Link from 'next/link';

import { Logo } from '@/components/logo';

import { ToggleLang } from '../toggle-lang';
import { ToggleTheme } from '../toggle-theme';

export const Header = () => {
  return (
    <header className="w-full shadow-sm">
      <div className="px-4 mx-auto container-fluid">
        <div className="flex flex-wrap items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="cursor-pointer">
              <Logo />
            </Link>

            <nav>
              <ul className="flex gap-4">
                <li>
                  <Link
                    href="/blog"
                    className="px-2 py-1 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="px-2 py-1 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
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
