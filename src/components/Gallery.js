import React, { Component } from 'react';
import styled from 'styled-components';

import background from '../../static/images/background.jpg';

const GalleryContainer = styled.section`
  display: grid;
  grid-template: 40vh 40vh / repeat(8, 1fr);
  overflow: hidden;
  @media (min-width: 768px) {}
`;

const Hero = styled.div`
  grid-column: 1 / -2;
  grid-row: 1 / 3;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: ${p => `translateY( ${(p.scrollTop / 10)}px )`};
  }
  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const Description = styled.div`
  grid-column: 3 / -1;
  grid-row: 1 / 2;
  font-family: 'paper_orangelight';
  font-size: 1.25rem;
  line-height: 1.5rem;
  padding-top: 5rem;
  opacity: 0;
  transform: translateX(-50px);
  transition: 500ms ease-out 750ms;
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
  &.loaded {
    opacity: 1;
    transform: translateX(0);
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
  position: relative;
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
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      loaded: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    let self = this;
    setTimeout(function () {
      self.setState({ loaded: true });
    }, 500);
  }

  handleScroll(e) {
    let scrollTop = e.target.scrollingElement.scrollTop;
    this.setState({ scrollTop: scrollTop });
  }

  render() {
    let { scrollTop, loaded } = this.state;
    return (
      <GalleryContainer>

        <Hero scrollTop={scrollTop}>
          <img src={background} alt="Betalabs Collective"/>
        </Hero>

        <Description
          className={loaded ? 'loaded' : ''}>
            Located in the breathtaking <br />
            <strong
              data-text="">
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