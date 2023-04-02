import { useState } from 'react';

import Link from 'next/link';

import { Logo } from '@/components/logo';
import { ToggleLang } from '@/components/toggle-lang';
import { ToggleTheme } from '@/components/toggle-theme';

import { NavMobile } from './nav-mobile';
import * as S from './styles';

const pages = ['About', 'Contact', 'Projects', 'Blog', 'Discord'];

export const Navbar = () => {
  const [hovered, setHovered] = useState('');

  return (
    <S.Container>
      <S.Header>
        <Link href="/">
          <S.ButtonLogo>
            <Logo />
          </S.ButtonLogo>
        </Link>
        <NavMobile pages={pages} />
        <S.Nav>
          <S.List onHoverEnd={() => setHovered('')}>
            {pages.map((page) => {
              const isHovered = hovered === page;
              const path = `/${page.toLowerCase()}`;

              return (
                <S.ListItem key={page}>
                  <Link href={path}>
                    <S.Anchor onHoverStart={() => setHovered(page)}>
                      {isHovered && (
                        <S.NavHovered
                          layoutId="shape"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                      {page}
                    </S.Anchor>
                  </Link>
                </S.ListItem>
              );
            })}
          </S.List>
        </S.Nav>
        <S.ToggleArea>
          <ToggleTheme />
          <ToggleLang />
        </S.ToggleArea>
      </S.Header>
    </S.Container>
  );
};
