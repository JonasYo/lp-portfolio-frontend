import React from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  Content,
  Subtitle,
  Description,
  Wrapper,
  Icon,
  FlexWrapper,
} from './ContactUsSection.styles';

interface IContact {
  link: string;
  icon: string;
  alt: string;
}
interface IProps {
  title: string;
  description: string;
  contacts: IContact[];
}

const ContactUsSection = ({ title, description, contacts }: IProps) => {
  const router = useRouter();

  return (
    <Container id="contact">
      <Content>
        <Subtitle>{title}</Subtitle>
        <Wrapper>
          <Description>{description}</Description>

          <FlexWrapper>
            {contacts.map((contact, index) => (
              <Icon
                key={index}
                onClick={() => router.push(contact.link)}
                src={contact.icon}
                alt={contact.alt}
              />
            ))}
          </FlexWrapper>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default ContactUsSection;
