import React, { Component } from 'react';
import styled from 'styled-components';

const IntroContainer = styled.section`
  display: grid;
  grid-template: auto auto / 1fr 1fr;
  align-items: center;
  padding: 4rem 0;
  @media (min-width: 768px) {
    grid-template: auto / 1fr 1fr 1fr 1fr;
  }
`;

const Title = styled.h1`
  font-family: 'paper_orangelight';
  font-size: 2.5rem;
  font-weight: 200;
  transform: translateX(-53px);
  opacity: 0;
  transition: all 500ms ease-out 250ms;
  strong {
    font-family: 'paper_orangeregular';
    font-weight: 400;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  &.loaded {
    transform: translateX(-3px);
    opacity: 1;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  font-family: 'paper_orangelight';
  font-weight: 200;
  text-align: right;
  line-height: 1.5rem;
  opacity: 0;
  padding-top: 2.5rem;
  transform: translateX(-50px);
  transition: all 500ms ease-out 500ms;
  &.loaded {
    opacity: 1;
    transform: translateX(0);
  }
  @media (min-width: 768px) {
    font-size: 1.75rem;
    text-align: left;
    line-height: 2.25rem;
  }
`;

const SectionNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  h1 {
    font-family: 'chloeregular';
    font-size: 150px;
    color: #f8f8f8;
    opacity: 0;
    transform: translateX(10px);
    transition: all 500ms ease-out;
    &.loaded {
      opacity: 1;
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 230px;
      transform: translateX(7px);
    }
  }
`;

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount = () => {
    let self = this;
    setTimeout(function () {
      self.setState({ loaded: true });
    }, 500);
  }

  render() {
    let { loaded } = this.state;
    return (
      <IntroContainer>

        <SectionNumber>
          <h1 className={loaded ? 'loaded' : ''}> 01 </h1>
        </SectionNumber>

        <Title className={loaded ? 'loaded' : ''}>
          <strong>beta</strong>labs
        </Title>

        <Description className={loaded ? 'loaded' : ''}>
          A Collective for designers, coders, story-tellers and
          problem-solvers; backing early-stage tech startups.
        </Description>

      </IntroContainer>
    );
  }
}

export default Intro;