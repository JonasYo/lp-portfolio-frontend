import React from 'react';

import { Container, Wrapper, Title, Description } from './Card.styles';

const Card = ({ title, description }) => (
  <Container>
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>

    <Description>{description}</Description>
  </Container>
);
export default Card;
