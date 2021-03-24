import React from 'react';

import {
  Container,
  Content,
  Subtitle,
  Description,
  Wrapper,
} from './Services.styles';

const Services = () => (
  <Container>
    <Content fadeIn>
      <Subtitle>Serviços</Subtitle>
      <Wrapper>
        <Description>
          Produtos e serviços para melhorar sua experiência de compra no Brasil
          e no mundo.
        </Description>
      </Wrapper>
    </Content>
  </Container>
);

export default Services;
