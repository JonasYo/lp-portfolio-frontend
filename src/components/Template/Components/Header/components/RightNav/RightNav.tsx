import React from 'react';
import Link from 'next/link';

import Container from './RightNav.styles';

interface IProps {
  open: boolean;
  handleCloseMenu: () => void;
}

const RightNav = ({ open, handleCloseMenu }: IProps) => (
  <Container open={open}>
    <li>
      <Link href="#home">
        <a onClick={handleCloseMenu} aria-hidden="true">
          Home
        </a>
      </Link>
    </li>

    <li>
      <Link href="#about">
        <a onClick={handleCloseMenu} aria-hidden="true">
          Sobre
        </a>
      </Link>
    </li>

    <li>
      <Link href="#technologies">
        <a onClick={handleCloseMenu} aria-hidden="true">
          Tecnologias
        </a>
      </Link>
    </li>

    <li>
      <Link href="#contact">
        <a onClick={handleCloseMenu} aria-hidden="true">
          Contato
        </a>
      </Link>
    </li>
  </Container>
);

export default RightNav;
