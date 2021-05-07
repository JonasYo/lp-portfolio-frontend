import React from 'react';
import Link from 'next/link';

import { Container, NavLink, Bars, NavMenu } from './Navbar.styles';

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
      <NavLink href="#home" activeStyle>
        Home
      </NavLink>
      <NavLink href="#about" activeStyle>
        Sobre
      </NavLink>
      <NavLink href="#services" activeStyle>
        Serviços
      </NavLink>
      <NavLink href="#contact" activeStyle>
        Contato
      </NavLink>
    </NavMenu>
  </Container>
);

export default Navbar;
