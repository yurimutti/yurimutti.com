import { MdNightlight, MdWbSunny } from 'react-icons/md';

import { useTheme } from 'next-themes';

import { AnimatePresence } from 'framer-motion';

import * as S from './styles';

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const invertedTheme = theme === 'dark' ? 'light' : 'dark';
  const handleToggleTheme = () => setTheme(invertedTheme);

  return (
    <AnimatePresence>
      <S.Theme>
        <S.ToggleButton onClick={handleToggleTheme}>
          {theme === 'dark' ? <MdNightlight /> : <MdWbSunny />}
        </S.ToggleButton>
      </S.Theme>
    </AnimatePresence>
  );
};
