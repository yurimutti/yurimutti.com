'use client';

import { useState } from 'react';
import { MdLanguage } from 'react-icons/md';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const languages = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'Português (Brasil)',
    code: 'pt-BR',
  },
];

export const ToggleLang = () => {
  const [activeLanguage, setActiveLanguage] = useState('en');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center justify-center w-10 h-10 gap-2 p-2 transition-colors duration-300 bg-transparent rounded-md hover:bg-slate-400 dark:hover:bg-slate-400">
          <MdLanguage className="w-6 h-6 text-slate-100 dark:text-slate-100" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          className="
            z-50 min-w-[180px] rounded-md border border-slate-200 dark:border-slate-700
            bg-white dark:bg-slate-900 p-1 shadow-md focus:outline-none
          "
        >
          {languages.map((language) => (
            <DropdownMenu.Item
              key={language.code}
              onClick={() => setActiveLanguage(language.code)}
              className={`
                w-full px-3 py-2 text-sm text-slate-900 dark:text-slate-100
                rounded-md cursor-pointer transition-colors duration-200
                hover:bg-slate-100 dark:hover:bg-slate-700
                ${activeLanguage === language.code ? 'bg-slate-100 dark:bg-slate-700' : ''}
              `}
            >
              {language.name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
