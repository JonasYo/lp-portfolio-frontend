import React from 'react';
import Link from 'next/link';

import { Ul } from './RightNav.styles';

const RightNav = ({ open, setOpen }) => (
  <Ul open={open}>
    <li>
      <Link href="#home">
        <a onClick={() => setOpen(!open)} aria-hidden="true">
          Home
        </a>
      </Link>
    </li>

    <li>
      <Link href="#about">
        <a onClick={() => setOpen(!open)} aria-hidden="true">
          Sobre
        </a>
      </Link>
    </li>

    <li>
      <Link href="#technologies">
        <a onClick={() => setOpen(!open)} aria-hidden="true">
          Tecnologias
        </a>
      </Link>
    </li>

    <li>
      <Link href="#contact">
        <a onClick={() => setOpen(!open)} aria-hidden="true">
          Contato
        </a>
      </Link>
    </li>
  </Ul>
);

export default RightNav;
