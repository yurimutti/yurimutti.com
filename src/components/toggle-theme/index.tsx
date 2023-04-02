import { useState } from 'react';
import { MdNightlight, MdWbSunny } from 'react-icons/md';

import { AnimatePresence } from 'framer-motion';

import * as S from './styles';

export const ToggleTheme = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <AnimatePresence>
      <S.Theme>
        {theme === 'dark' ? (
          <S.ToggleButton onClick={() => setTheme('light')}>
            <MdNightlight />
            <S.ThemeInfo>switch to light mode</S.ThemeInfo>
          </S.ToggleButton>
        ) : (
          <S.ToggleButton onClick={() => setTheme('dark')}>
            <MdWbSunny />
            <S.ThemeInfo>switch to dark mode</S.ThemeInfo>
          </S.ToggleButton>
        )}
      </S.Theme>
    </AnimatePresence>
  );
};
