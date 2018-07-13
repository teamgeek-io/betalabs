import React, { Component } from 'react';
import styled from 'styled-components';

import background from '../../static/images/background.jpg';

const GalleryContainer = styled.section`
  display: grid;
  grid-template: 40vh 40vh / repeat(8, 1fr);
  overflow: hidden;
  @media (min-width: 768px) {
    /* grid-template: 40vh 40vh / repeat(4, 1fr); */
  }
`;

const Hero = styled.div`
  grid-column: 1 / -2;
  grid-row: 1 / 3;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const Description = styled.div`
  /* background: rgba(255,0,0,0.5); */
  grid-column: 3 / -1;
  grid-row: 1 / 2;
  font-family: 'paper_orangelight';
  font-size: 1.25rem;
  padding-top: 5rem;
  strong {
    font-family: 'chloeregular';
    position: relative;
    &:after {
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 100%;
      right: 0;
      text-align: right;
      font-family: 'paper_orangelight';
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) {
    grid-column: 4 / 7;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const SectionNumber = styled.div`
  grid-column: -3 / -1;
  grid-row: 2 / 3;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  h1 {
    font-family: 'chloeregular';
    font-size: 150px;
    color: #f8f8f8;
  }
  @media (min-width: 768px) {
    grid-column: -5 / -3;
    h1 {
      font-size: 230px;
    }
  }
`;

class Gallery extends Component {
  render() {
    return (
      <GalleryContainer>

        <Hero />

        <Description
          className="grid-line">
            Located in the breathtaking <br />
            <strong
              data-text="Amarand Avenue">
              Central Square at Menlyn Maine
            </strong>
        </Description>

        <SectionNumber className="grid-line">
          <h1> 02 </h1>
        </SectionNumber>

      </GalleryContainer>
    );
  }
}

export default Gallery;


/*
  const SectionNumber styled(BaseSectionNumber)
*/