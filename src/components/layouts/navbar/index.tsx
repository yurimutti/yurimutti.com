import { useState } from 'react';

import { AnimateSharedLayout } from 'framer-motion';
import Link from 'next/link';
// import { useRouter } from 'next/router';

import { Logo } from '@/components/logo';
import { ToggleLang } from '@/components/toggle-lang';
import { ToggleTheme } from '@/components/toggle-theme';

import { NavMobile } from './nav-mobile';
import * as S from './styles';

const pages = ['About', 'Blog', 'Discord', 'Projects'];

export function Navbar() {
  const [hovered, setHovered] = useState('');
  // const router = useRouter();

  return (
    <AnimateSharedLayout>
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
                // const path = `/${page.toLowerCase()}`;

                return (
                  <S.ListItem key={page}>
                    <S.Anchor href="#" onHoverStart={() => setHovered(page)}>
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
    </AnimateSharedLayout>
  );
}
