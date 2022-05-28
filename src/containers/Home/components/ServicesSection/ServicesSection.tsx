import React from 'react';

import Card from '@components/Card';

import {
  Container,
  Content,
  Title,
  Description,
  Wrapper,
  CardList,
} from './ServicesSection.styles';

interface ITechnologies {
  title: string;
  description: string;
  iconUrl: string;
}

interface IProps {
  title: string;
  description: string;
  listTechnological: ITechnologies[];
}

const ServicesSection = ({ title, description, listTechnological }: IProps) => (
  <Container id="technologies">
    <Content>
      <Title>{title}</Title>

      <Wrapper>
        <Description>{description}</Description>
      </Wrapper>

      <CardList>
        {listTechnological.map(
          (
            { title: titleCard, description: descriptionCard, iconUrl },
            index,
          ) => (
            <Card
              key={index}
              title={titleCard}
              description={descriptionCard}
              iconUrl={iconUrl}
            />
          ),
        )}
      </CardList>
    </Content>
  </Container>
);

export default ServicesSection;
