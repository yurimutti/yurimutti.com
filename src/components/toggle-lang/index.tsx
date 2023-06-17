import { useState } from 'react';
import { MdLanguage } from 'react-icons/md';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import * as S from './styles';
import { Languages } from './types';

const languages: Languages[] = [
  // {
  //   name: 'English',
  //   code: 'en',
  // },
  {
    name: 'Português (Brasil)',
    code: 'pt-BR',
  },
];

export const ToggleLang = () => {
  const [activeLanguage, setActiveLanguage] = useState('en');

  return (
    <DropdownMenu.Root>
      <S.ToggleLang>
        <S.DropdownMenuTriggerStyled>
          <MdLanguage />
          {activeLanguage.toUpperCase()}
        </S.DropdownMenuTriggerStyled>
      </S.ToggleLang>

      <DropdownMenu.Portal>
        <S.DropdownMenuContentStyled>
          {languages.map((language) => (
            <S.DropdownMenuItemStyled
              key={language.code}
              onClick={() => setActiveLanguage(language.code)}
              css={{
                backgroundColor:
                  activeLanguage === language.code ? '$slate6' : 'inehrit',
                color: '$slate12',
              }}
            >
              {language.name}
            </S.DropdownMenuItemStyled>
          ))}
        </S.DropdownMenuContentStyled>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
