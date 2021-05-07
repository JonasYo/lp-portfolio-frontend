import React from 'react';

import {
  Container,
  Content,
  Subtitle,
  Description,
  Wrapper,
} from './AboutSection.styles';

interface IProps {
  title: string;
  description: string;
}

const AboutSection = ({ title, description }: IProps) => (
  <Container id="about">
    <Content fadeIn>
      <Subtitle>{title}</Subtitle>
      <Wrapper>
        <Description>{description}</Description>
      </Wrapper>
    </Content>
  </Container>
);

export default AboutSection;
