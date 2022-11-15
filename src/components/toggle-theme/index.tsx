import { MdNightlight } from 'react-icons/md';

import * as S from './styles';

export function ToggleTheme() {
  return (
    <S.Theme>
      <MdNightlight />
      <S.ThemeInfo>switch to light mode</S.ThemeInfo>
    </S.Theme>
  );
}
