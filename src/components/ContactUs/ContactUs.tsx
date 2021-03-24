import React from 'react';

import {
  Container,
  Content,
  Subtitle,
  Description,
  Wrapper,
  MailTo,
} from './ContactUs.styles';

const ContactUs = () => (
  <Container>
    <Content fadeIn>
      <Subtitle>Contato</Subtitle>
      <Wrapper>
        <Description>
          Fique a vontade para entrar em contato sempre que precisar ;D.
        </Description>
        <MailTo href="mailto:jonascska07@gmail.com">
          jonascska07@gmail.com
        </MailTo>
      </Wrapper>
    </Content>
  </Container>
);

export default ContactUs;
