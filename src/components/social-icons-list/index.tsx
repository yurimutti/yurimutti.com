import { useState } from 'react';
import { SiGithub, SiTwitter, SiLinkedin, SiInstagram } from 'react-icons/si';

import * as S from './styles';

const socialNetworks = [
  {
    name: 'github',
    icon: <SiGithub />,
    link: '/',
  },
  {
    name: 'twitter',
    icon: <SiTwitter />,
    link: '/',
  },
  {
    name: 'linkedin',
    icon: <SiLinkedin />,
    link: '/',
  },
  {
    name: 'instagram',
    icon: <SiInstagram />,
    link: '/',
  },
];

export function SocialIconsList() {
  const [hovered, setHovered] = useState('');

  return (
    <S.SocialIconsList onHoverEnd={() => setHovered('')}>
      {socialNetworks.map(({ name, icon, link }) => {
        const isHovered = hovered === name;

        return (
          <S.SocialIconsItem key={name}>
            <S.SocialIconsLink
              href={link}
              onHoverStart={() => setHovered(name)}
            >
              {icon}

              {isHovered && (
                <S.SocialIconsHovered
                  layoutId="shape"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </S.SocialIconsLink>
          </S.SocialIconsItem>
        );
      })}
    </S.SocialIconsList>
  );
}
