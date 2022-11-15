import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import { AnimatePresence } from 'framer-motion';

import { ToggleLang } from '@/components/toggle-lang';
import { ToggleTheme } from '@/components/toggle-theme';

import * as S from './styles';

export function NavMobile({ pages }: { pages: string[] }) {
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
            <button className="closeNavMobile" onClick={() => setIsOpen(false)}>
              <MdClose />
            </button>
            <nav>
              <ul>
                {pages.map((page) => (
                  <li key={page}>{page}</li>
                ))}
              </ul>
              <ToggleLang />
              <ToggleTheme />
            </nav>
          </S.NavMobileOverlay>
        )}
      </AnimatePresence>
      <button className="openNavMobile" onClick={() => setIsOpen(!isOpen)}>
        <MdMenu />
      </button>
    </S.NavMobile>
  );
}
