import React from 'react';

import Container from './Button.styles';

interface IProps {
  title: string;
  type: string;
  onClick: () => void;
}

const Button = ({ title, type, onClick }: IProps) => (
  <Container onClick={onClick} type={type}>
    {title}
  </Container>
);

export default Button;
