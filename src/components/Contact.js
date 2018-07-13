import React, { Component } from 'react';
import styled from 'styled-components';

const path_facebook = "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
const path_instagram = "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

const Container = styled.div`
  display: grid;
  grid-template: repeat(3, auto) / repeat(8, 1fr);
  background: #000;
  padding-top: 4rem;
  @media (min-width: 768px) {
    grid-template: repeat(3, auto) / repeat(4, 1fr);
  }
`;

const Title = styled.h1`
  grid-column: 2 / -2;
  font-family: 'chloeregular';
  font-weight: 200;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 2rem;
  font-size: 9.5vw;
  @media (min-width: 768px) {
    font-size: 7.5vw;
  }
`;

const MailLink = styled.a`
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  display: flex;
  align-items: center;
  font-family: 'paper_orangeregular';
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  transition: all 300ms ease-out;
  &:hover {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    outline: none;
  }
  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

const SocialLinks = styled.div`
  grid-column: -5 / -2;
  grid-row: 2 / 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 768px) {
    grid-column: 3 / 4;
  }
`;

const SocialLink = styled.a`
  position: relative;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50%;
    height: auto;
    path {
      transition: all 300ms ease-out;
      fill: rgba(255, 255, 255, 1);
    }
  }
  &:hover {
    cursor: pointer;
    svg {
      path {
        fill: rgba(255, 255, 255, 0.75);
      }
    }
  }
`;

/*
const NewSectionNumber = styled(SectionNumber)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  transform: translateX(-7%);
  color: #0e0e0e;
`;
 */

const SectionNumber = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 4;

  display: flex;
  align-items: flex-end;
  overflow: hidden;
  h1 {
    font-family: 'chloeregular';
    font-size: 150px;
    color: #0e0e0e;
    height: 100px;
    transform: translate(-35px,-10px);
  }
  @media (min-width: 768px) {
     grid-column: 1 / 2;
    h1 {
      font-size: 230px;
      height: 150px;
      transform: translate(-70px, -40px);

    }
  }
`;

class Contact extends Component {
  render() {
    return (
      <Container>

        <Title>
          Be part of the future.
        </Title>

        <MailLink href="mailto:info@betalabs.co.za" target="_top">
          Contact us
        </MailLink>

        <SocialLinks>
          <SocialLink data-text="Like">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d={path_facebook} /></svg>
          </SocialLink>
          <SocialLink data-text="Follow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d={path_instagram} /></svg>
          </SocialLink>
        </SocialLinks>

        <SectionNumber>
          <h1> 03 </h1>
        </SectionNumber>

      </Container>
    );
  }
}

export default Contact;