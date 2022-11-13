import { useState } from 'react';

import { AnimateSharedLayout } from 'framer-motion';
import Link from 'next/link';
// import { useRouter } from 'next/router';

import { Logo } from '@/components/logo';
import { ToggleTheme } from '@/components/toggle-theme';

import {
  Anchor,
  ButtonLogo,
  Container,
  Header,
  List,
  ListItem,
  Nav,
  ToggleArea,
  NavHovered,
} from './styles';

const pages = ['About', 'Blog', 'Discord', 'Projects'];

export function Navbar() {
  const [hovered, setHovered] = useState('');
  // const router = useRouter();

  return (
    <AnimateSharedLayout>
      <Container>
        <Header>
          <Link href="/">
            <ButtonLogo>
              <Logo />
            </ButtonLogo>
          </Link>
          <Nav>
            <List onHoverEnd={() => setHovered('')}>
              {pages.map((page) => {
                const isHovered = hovered === page;
                // const path = `/${page.toLowerCase()}`;

                return (
                  <ListItem key={page}>
                    <Anchor href="#" onHoverStart={() => setHovered(page)}>
                      {isHovered && (
                        <NavHovered
                          layoutId="shape"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                      {page}
                    </Anchor>
                  </ListItem>
                );
              })}
            </List>
          </Nav>
          <ToggleArea>
            <ToggleTheme />
          </ToggleArea>
        </Header>
      </Container>
    </AnimateSharedLayout>
  );
}
