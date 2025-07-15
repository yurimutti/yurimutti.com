'use client';

import { useState } from 'react';
import { MdLanguage } from 'react-icons/md';
import { DropdownMenu } from '@/components/ui/dropdown-menu';

const languages = [
  { name: 'English', code: 'en' },
  { name: 'Português (Brasil)', code: 'pt-BR' },
];

export const ToggleLang = () => {
  const [activeLanguage, setActiveLanguage] = useState('en');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="
            flex items-center justify-center w-10 h-10 gap-2 p-2 rounded-md cursor-pointer
            transition-colors duration-300
            hover:bg-[hsl(var(--accent)/0.15)]
          "
        >
          <MdLanguage className="w-6 h-6" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          className="
            z-50 min-w-[180px] rounded-md border p-1 shadow-md focus:outline-none
            border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))]
          "
        >
          {languages.map((language) => (
            <DropdownMenu.Item
              key={language.code}
              onClick={() => setActiveLanguage(language.code)}
              className={`
                w-full px-3 py-2 text-sm rounded-md cursor-pointer
                transition-colors duration-200
                hover:bg-[hsl(var(--muted)/0.08)]
                ${
                  activeLanguage === language.code
                    ? 'bg-[hsl(var(--muted)/0.12)]'
                    : ''
                }
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
