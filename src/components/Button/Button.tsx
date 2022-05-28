import React from 'react';

import Container from './Button.styles';

interface IProps {
  title: string;
  onClick: () => void;
  type: 'submit' | 'reset' | 'button';
}

const Button = ({ title, onClick, type }: IProps) => (
  <Container onClick={() => onClick()} type={type}>
    {title}
  </Container>
);

export default Button;
