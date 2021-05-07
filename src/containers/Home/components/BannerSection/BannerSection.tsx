import React from 'react';

import {
  Container,
  Title,
  Description,
  Content,
  Wrapper,
  Image,
} from './BannerSection.styles';

interface IProps {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}

const BannerSection = ({ title, description, image }: IProps) => (
  <Container id="home">
    <Content>
      <Title>{title}</Title>
      <Wrapper>
        <Description>{description}</Description>
      </Wrapper>
    </Content>
    <Image src={image.url} alt={image.alt} />
  </Container>
);

export default BannerSection;
