import React from 'react';
import Card from '@components/Card';

import content from './content';

import {
  Container,
  Content,
  Subtitle,
  Description,
  Wrapper,
  CardList
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

      <CardList>
        {content.map(({ title, description }, index) => (
          <Card key={index} title={title} description={description} />
        ))}
      </CardList>
    </Content>
  </Container>
);

export default Services;
