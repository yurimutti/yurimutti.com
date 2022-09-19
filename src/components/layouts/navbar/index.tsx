// import { motion, AnimateSharedLayout } from 'framer-motion'

import Link from 'next/link';

import { Logo } from '@/components/logo';
import { ToggleTheme } from '@/components/toggle-theme';

import {
  Header,
  Container,
  Nav,
  List,
  ListItem,
  ButtonLogo,
  Anchor,
} from './styles';

const pages = ['About', 'Projects', 'Blog', 'Discord'];

export function Navbar() {
  // const router = useRouter();

  return (
    <Container>
      <Header>
        <Link href="/">
          <ButtonLogo>
            <Logo />
          </ButtonLogo>
        </Link>
        <Nav>
          <List>
            {pages.map((page) => (
              <ListItem key={page}>
                <Anchor href="">{page}</Anchor>
              </ListItem>
            ))}
          </List>
        </Nav>
        <ToggleTheme />
      </Header>
    </Container>
  );
}
