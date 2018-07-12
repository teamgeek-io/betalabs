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
  transform: translateX(-3px);
  strong {
    font-family: 'paper_orangeregular';
    font-weight: 400;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  font-family: 'paper_orangelight';
  font-weight: 200;
  text-align: right;
  line-height: 2.25rem;
  @media (min-width: 768px) {
    font-size: 1.75rem;
    text-align: left;
    transform: translateY(25%);
  }
`;

const SectionNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  h1 {
    font-family: 'chloeregular';
    font-size: 150px;
    color: #f8f8f8;
    transform: translateX(5px);
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 230px;
      transform: translateX(7px);
    }
  }
`;

class Intro extends Component {
  render() {
    return (
      <IntroContainer>

        <SectionNumber>
          <h1> 01 </h1>
        </SectionNumber>

        <Title>
          <strong>beta</strong>labs
        </Title>

        <Description>
          A Collective for designers, coders, story-tellers and
          problem-solvers; backing early-stage tech startups.
        </Description>

      </IntroContainer>
    );
  }
}

export default Intro;