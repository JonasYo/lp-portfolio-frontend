import React from 'react';
import Link from 'next/link';

import Burger from './components/Burger/Burger';

import Container from './Header.styles';

const Header = () => (
  <Container>
    <Link href="/">
      <img
        src="https://fontmeme.com/permalink/210507/2e4607094f728ee424371d3b9a0586ed.png"
        alt="logo"
      />
    </Link>

    <Burger />
  </Container>
);

export default Header;
