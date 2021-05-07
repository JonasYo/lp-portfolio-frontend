import React from 'react';
import Card from '@components/Card';

import {
  Container,
  Content,
  Subtitle,
  Description,
  Wrapper,
  CardList,
} from './ServicesSection.styles';

interface ITechnologies {
  title: string;
  description: string;
}

interface IProps {
  title: string;
  description: string;
  listTechnological: ITechnologies[];
}

const ServicesSection = ({ title, description, listTechnological }: IProps) => (
  <Container id="technologies">
    <Content fadeIn>
      <Subtitle>{title}</Subtitle>
      <Wrapper>
        <Description>{description}</Description>
      </Wrapper>

      <CardList>
        {listTechnological.map(
          ({ title: titleCard, description: descriptionCard }, index) => (
            <Card key={index} title={titleCard} description={descriptionCard} />
          ),
        )}
      </CardList>
    </Content>
  </Container>
);

export default ServicesSection;
