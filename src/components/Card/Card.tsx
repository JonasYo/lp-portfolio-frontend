import React from 'react';

import { Container, Wrapper, Icon, Title, Description } from './Card.styles';

interface IProps {
  title: string;
  description: string;
  iconUrl: string;
}

const Card = ({ title, description, iconUrl }: IProps) => (
  <Container>
    <Wrapper>
      <Icon src={iconUrl} />
      <Title>{title}</Title>
    </Wrapper>

    <Description>{description}</Description>
  </Container>
);

export default Card;
