import React from 'react'

import Banner from '../../components/Banner';
import About from '../../components/About';
import Services from '../../components/Services';
import ContactUs from '../../components/ContactUs';

import { Container, Text } from './Home.styles';

const Home = props => (
  <Container >
      <Banner/>
      <About/>
      <Services/>
      <ContactUs/>
  </Container>
);

export default Home;