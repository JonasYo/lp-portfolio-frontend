import React from 'react';

import {
  Container,
  Content,
  Subtitle,
  Description,
  Wrapper,
} from './Button.styles';

const Card = () => (
  <Container>
    <Content fadeIn>
      <Subtitle>Contato</Subtitle>
      <Wrapper>
        <Description>
          Produtos e serviços para melhorar sua experiência de compra no Brasil
          e no mundo.
        </Description>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;
