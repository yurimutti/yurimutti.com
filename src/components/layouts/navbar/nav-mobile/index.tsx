import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import Link from 'next/link';

import { AnimatePresence } from 'framer-motion';

import { ToggleLang } from '@/components/toggle-lang';
import { ToggleTheme } from '@/components/toggle-theme';

import * as S from './styles';

export const NavMobile = ({ pages }: { pages: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.NavMobile>
      <AnimatePresence>
        {isOpen && (
          <S.NavMobileOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="closeNavMobile"
              onClick={() => setIsOpen(false)}
            >
              <MdClose />
            </button>
            <nav>
              <ul>
                {pages.map((page) => {
                  const path = `/${page.toLowerCase()}`;

                  return (
                    <li key={page}>
                      <Link href={path}>{page}</Link>
                    </li>
                  );
                })}
              </ul>
              <ToggleLang />
              <ToggleTheme />
            </nav>
          </S.NavMobileOverlay>
        )}
      </AnimatePresence>
      <button
        type="button"
        className="openNavMobile"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdMenu />
      </button>
    </S.NavMobile>
  );
};
