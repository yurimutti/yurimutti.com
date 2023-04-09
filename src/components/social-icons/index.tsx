import { useState } from 'react';
import { SiGithub, SiTwitter, SiLinkedin, SiInstagram } from 'react-icons/si';

import * as S from './styles';

const socialNetworks = [
  {
    name: 'linkedin',
    icon: <SiLinkedin />,
    link: 'https://www.linkedin.com/in/yuri-mutti-0418bb1aa',
  },
  {
    name: 'github',
    icon: <SiGithub />,
    link: 'https://github.com/yurimutti',
  },
  {
    name: 'twitter',
    icon: <SiTwitter />,
    link: 'https://twitter.com/Yuri_Mutti',
  },
  {
    name: 'instagram',
    icon: <SiInstagram />,
    link: 'https://www.instagram.com/yurimuttidev',
  },
];

export const SocialIcons = () => {
  const [hovered, setHovered] = useState('');

  return (
    <S.SocialIconsList onHoverEnd={() => setHovered('')}>
      {socialNetworks.map(({ name, icon, link }) => {
        const isHovered = hovered === name;

        return (
          <S.SocialIconsItem key={name}>
            <S.SocialIconsLink
              href={link}
              target="_blank"
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
};
