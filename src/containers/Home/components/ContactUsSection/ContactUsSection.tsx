import React from 'react';

import {
  Container,
  Content,
  Subtitle,
  Description,
  Wrapper,
  MailTo,
  LinkedinAddress,
  Icon,
  FlexWrapper,
} from './ContactUsSection.styles';

interface IProps {
  title: string;
  description: string;
  email: {
    link: string;
    icon: string;
  };
  linkedin: {
    link: string;
    icon: string;
  };
}

const ContactUsSection = ({ title, description, email, linkedin }: IProps) => (
  <Container id="contact">
    <Content fadeIn>
      <Subtitle>{title}</Subtitle>
      <Wrapper>
        <Description>{description}</Description>

        <FlexWrapper>
          <Icon src={email.icon} alt="icon-email" />
          <MailTo href={`mailto:${email.link}`}>{email.link}</MailTo>
        </FlexWrapper>

        <FlexWrapper>
          <Icon src={linkedin.icon} alt="icon-linkedin" />
          <LinkedinAddress>{linkedin.link}</LinkedinAddress>
        </FlexWrapper>
      </Wrapper>
    </Content>
  </Container>
);

export default ContactUsSection;
