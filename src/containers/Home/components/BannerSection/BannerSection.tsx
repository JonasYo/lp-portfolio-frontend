import React from 'react';

import {
  Container,
  Title,
  Description,
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
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
    <Image src={image.url} alt={image.alt} />
  </Container>
);

export default BannerSection;
