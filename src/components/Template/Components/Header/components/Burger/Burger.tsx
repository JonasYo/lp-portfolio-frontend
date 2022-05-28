import React, { useState } from 'react';
import RightNav from '../RightNav/RightNav';

import StyledBurger from './Burger.styles';

const Burger = () => {
  const [open, setOpen] = useState<boolean>(false);

  function handleCloseMenu() {
    setOpen(!open);
  }

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <RightNav open={open} handleCloseMenu={handleCloseMenu} />
    </>
  );
};

export default Burger;
