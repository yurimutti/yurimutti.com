import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import { ToggleLang } from '@/components/toggle-lang';
import { ToggleTheme } from '@/components/toggle-theme';

import * as S from './styles';

export function NavMobile({ pages }: { pages: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.NavMobile>
      {isOpen && (
        <S.NavMobileOverlay>
          <MdClose
            onClick={() => setIsOpen(false)}
            className="closeMobileMenu"
          />
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

      <MdMenu onClick={() => setIsOpen(!isOpen)} />
    </S.NavMobile>
  );
}
