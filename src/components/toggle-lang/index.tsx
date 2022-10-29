import { US, BR } from 'country-flag-icons/react/3x2';

import { Lang } from './styles';

export function ToggleLang() {
  return (
    <Lang>
      <BR title="Brazil" />
      <US title="United States" />
    </Lang>
  );
}
