import React from 'react';
import Link from 'next/link'

import {
  Container,
  NavLink,
  Bars,
  NavMenu,
} from './Navbar.styles';

const Navbar = () => {
  return (
      <Container>
        <Link href='/'>
           <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt='logo' /> 
         </Link> 
        <Bars />
        <NavMenu>
          <NavLink href='/' activeStyle>
            Home
          </NavLink>
          <NavLink href='/about' activeStyle>
             Sobre 
          </NavLink>
          <NavLink href='/services' activeStyle>
            Serviços 
          </NavLink>
          <NavLink href='/contact' activeStyle>
            Contato 
          </NavLink>
        </NavMenu>
      </Container>
  );
};

export default Navbar;