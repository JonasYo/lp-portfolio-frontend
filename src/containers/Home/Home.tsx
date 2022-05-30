import React from 'react';

import {
  BannerSection,
  AboutSection,
  ServicesSection,
  ContactUsSection,
} from './components';

import content from '../content';

import { Container } from './Home.styles';

const Home = () => (
  <Container>
    <BannerSection {...content.bannerSection} />

    <AboutSection {...content.aboutSection} />

    <ServicesSection {...content.serviceSection} />

    <ContactUsSection {...content.contactSection} />
  </Container>
);

export default Home;
