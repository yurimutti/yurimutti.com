import { SiGithub, SiTwitter, SiLinkedin, SiInstagram } from 'react-icons/si';

import * as S from './styles';

export function SocialIconsList() {
  return (
    <S.SocialIconsList>
      <S.SocialIconsItem>
        <S.SocialIconsLink href="#">
          <SiGithub />
        </S.SocialIconsLink>
      </S.SocialIconsItem>

      <S.SocialIconsItem>
        <S.SocialIconsLink href="#">
          <SiTwitter />
        </S.SocialIconsLink>
      </S.SocialIconsItem>

      <S.SocialIconsItem>
        <S.SocialIconsLink href="#">
          <SiLinkedin />
        </S.SocialIconsLink>
      </S.SocialIconsItem>

      <S.SocialIconsItem>
        <S.SocialIconsLink href="#">
          <SiInstagram />
        </S.SocialIconsLink>
      </S.SocialIconsItem>
    </S.SocialIconsList>
  );
}
