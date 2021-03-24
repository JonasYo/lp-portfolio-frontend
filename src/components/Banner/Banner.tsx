import React from 'react';

import {
  Container,
  Content,
  Title,
  Description,
  Wrapper,
  Image,
} from './Banner.styles';

const Home = () => (
  <Container>
    <Content fadeIn>
      <Wrapper>
        <Title>We Makke</Title>
        <Description>
          Nós transformamos o desejo do cliente em realidade, gerando acesso e
          oportunidades para brasileiros.
        </Description>
      </Wrapper>
      <Image
        src="/images/building-websites.svg"
        alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
      />
    </Content>
  </Container>
);

export default Home;
