import React from 'react';

import {
  Container,
  Content,
  Title,
  Description,
  Wrapper,
} from './AboutSection.styles';

interface IProps {
  title: string;
  description: string;
}

const AboutSection = ({ title, description }: IProps) => (
  <Container id="about">
    <Content>
      <Title>{title}</Title>

      <Wrapper>
        <Description>{description}</Description>
      </Wrapper>
    </Content>
  </Container>
);

export default AboutSection;
