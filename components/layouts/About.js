import React from "react";
import styled from "styled-components";
import Head from "next/head";

function About() {
  return (
    <Container>
      <Content>
        <ContentText>
          <p>Know About Me</p>
          <h1>About Me</h1>
          <h3>
            Hi I'm Ariful. I am a full-stack Web Developer. I've been working on
            the industry for the last 2 years. I can work both frontend and
            backend. I love working on business ideas of clients and turning the
            thoughts into a full-blown reality. I love to learn modern web
            technologies and work with them.
          </h3>
          <h3>
            The satisfaction of my clients is my topmost priority. My expertise
            are in: 1. React JS 2.Next JS. 3.HTML & CSS. 4.JavaScript. 5.Node
            JS. 6.MongoDB. 7.Redux. 8.BootStrap.
          </h3>
        </ContentText>
        <ContentImg>
          <img src="/images/pexels-soumil-kumar-735911.jpg" />
        </ContentImg>
      </Content>
    </Container>
  );
}

export default About;

const Container = styled.div`
  padding: 5rem calc(3vw + 5px);
  background-color: #ddd;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 5rem;
  justify-items: space-between;

  @media only screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ContentText = styled.div`
  justify-self: end;
  margin-top: 4rem;
  p {
    background-image: linear-gradient(
      to right,
      #f45fcd,
      #0058c7,
      #0084e4,
      #00abf3,
      #00d1f8
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.8rem;
    background-size: 20rem;
  }

  h1 {
    font-size: 8rem;
    font-weight: 900;

    @media only screen and (max-width: 768px) {
      font-size: 6rem;
      font-weight: 700;
    }
    @media only screen and (max-width: 768px) {
      font-size: 4rem;
      font-weight: 700;
    }
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 1.6;
    margin-bottom: 3rem;
  }
`;
const ContentImg = styled.div`
  justify-self: end;
  width: 40rem;
  border-radius: 1rem;
  overflow: hidden;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
