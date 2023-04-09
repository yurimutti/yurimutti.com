import { SocialIcons } from '@/components/social-icons';

import * as S from './styles';

export const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <span>Connect with me online</span>
        <SocialIcons />
      </S.Container>
    </S.Footer>
  );
};
