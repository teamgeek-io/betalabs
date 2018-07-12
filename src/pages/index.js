import React, { Component } from 'react';
import styled from 'styled-components';

import Intro from '../components/Intro';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomeContainer = styled.div``;

class BasePage extends Component {
  render() {
    return (
      <HomeContainer>

        <Intro />
        <Gallery />
        <Testimonials />
        <Contact />

      </HomeContainer>
    );
  }
}

export default BasePage;