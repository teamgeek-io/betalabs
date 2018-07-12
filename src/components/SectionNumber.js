import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* text-align: ${p => `${p.textAlign}`}; */
  color: #f8f8f8;
  font-size: 300px;
  display: flex;
  justify-content: flex-end;
  h1 {
    font-family: 'chloeregular';
    transform: translateX(10px);
  }
`;

const SectionNumber = (props) => {
  return (
    <Container {...props}>
      <h1>
        {props.number}
      </h1>
    </Container>
  );
};

export default SectionNumber;