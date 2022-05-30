import React from 'react';
import { useRouter } from 'next/router';

import Button from '@components/Button';

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
  button: {
    title: string;
    link: string;
  };
}

const BannerSection = ({ title, description, image, button }: IProps) => {
  const router = useRouter();

  return (
    <Container id="home">
      <Content>
        <Title>{title}</Title>

        <Wrapper>
          <Description>{description}</Description>
        </Wrapper>

        <Button
          title={button.title}
          type="button"
          onClick={() => router.push(button?.link)}
        />
      </Content>

      <Image src={image.url} alt={image.alt} />
    </Container>
  );
};

export default BannerSection;
