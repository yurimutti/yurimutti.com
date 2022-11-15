import { SocialIconsList } from '@/components/social-icons-list';

import * as S from './styles';
export function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <span>Connect with me online</span>
        <SocialIconsList />
      </S.Container>
    </S.Footer>
  );
}
