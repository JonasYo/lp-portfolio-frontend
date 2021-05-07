import React from 'react';

import {
  Container,
  Content,
  Subtitle,
  Description,
  Wrapper,
  MailTo,
} from './ContactUsSection.styles';

interface IProps {
  title: string;
  description: string;
  emailAddress: string;
  linkedinAddress: string;
}

const ContactUsSection = ({
  title,
  description,
  emailAddress,
  linkedinAddress,
}: IProps) => (
  <Container id="contact">
    <Content fadeIn>
      <Subtitle>{title}</Subtitle>
      <Wrapper>
        <Description>{description}</Description>
        <MailTo href="mailto:jonascska07@gmail.com">{emailAddress}</MailTo>
        <MailTo>{linkedinAddress}</MailTo>
      </Wrapper>
    </Content>
  </Container>
);

export default ContactUsSection;
