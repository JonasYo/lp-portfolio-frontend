import React from 'react';

import {
  Container,
  Content,
  Subtitle,
  Description,
  Wrapper,
} from './About.styles';

const About = () => (
  <Container>
    <Content fadeIn>
      <Subtitle>Sobre</Subtitle>
      <Wrapper>
        <Description>
          Produtos e serviços para melhorar sua experiência de compra no Brasil
          e no mundo.
        </Description>
      </Wrapper>
    </Content>
  </Container>
);

export default About;
