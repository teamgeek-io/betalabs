import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template: auto / repeat(8, 1fr);
  padding: 4rem 0;
  @media (min-width: 768px) {
    padding: 8rem 0;
    grid-template: repeat(3, auto) / repeat(4, 1fr);
  }
`;

const Testimonial = styled.div`
  grid-column: 2 / -2;
`;

const Quote = styled.p`
  font-family: 'paper_orangelight';
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Author = styled.p`
  font-family: 'paper_orangeregular';
  font-size: 0.85rem;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Testimonials = () => {
  return (
    <Container>
      <Testimonial>
        <Quote>
          This space is designed to empower like-minded humans
          to create the future they want to believe and live in.
        </Quote>
        <Author>
          Ryan Brussow  &nbsp; - &nbsp; Founder
        </Author>
      </Testimonial>
    </Container>
  );
};

export default Testimonials;