import { useState } from 'react';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container } from '@/components/layouts/container';
import { Logo } from '@/components/logo';
import { ToggleLang } from '@/components/toggle-lang';
import { ToggleTheme } from '@/components/toggle-theme';

import { NavMobile } from './nav-mobile';
import * as S from './styles';

const pages = ['Sobre', 'Projetos', 'Contato', 'Discord'];

export const Navbar = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState('');

  const { theme } = useTheme();

  return (
    <Container>
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
              const isActive = router.pathname === path;

              return (
                <S.ListItem
                  key={page}
                  css={{
                    '&:after': {
                      display: isActive ? 'block' : 'none',
                      content: '',
                      width: '32px',
                      height: '1px',
                      margin: '4px auto 0 auto',
                      backgroundColor:
                        theme === 'dark' ? '$slate12' : '$slate1',
                    },
                  }}
                >
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
    </Container>
  );
};
