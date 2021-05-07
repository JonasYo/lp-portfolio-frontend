import React from 'react';
import Link from 'next/link';

import { Container, Bars, NavMenu } from './Navbar.styles';

const Navbar = () => (
  <Container>
    <Link href="/">
      <img
        src="https://fontmeme.com/permalink/210507/2e4607094f728ee424371d3b9a0586ed.png"
        alt="logo"
      />
    </Link>
    <Bars />
    <NavMenu>
      <Link href="#home">Home</Link>
      <Link href="#about">Sobre</Link>
      <Link href="#technologies">Tecnologias</Link>
      <Link href="#contact">Contato</Link>
    </NavMenu>
  </Container>
);

export default Navbar;
