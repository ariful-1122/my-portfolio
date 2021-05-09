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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            amet rerum nesciunt quas sapiente asperiores necessitatibus nulla.
            Sint nisi ad cupiditate beatae laboriosam totam libero odio, est
            ipsum excepturi fugiat.
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            veniam doloribus quo, soluta voluptatibus autem quibusdam ut nobis,
            pariatur non distinctio nihil. Maxime alias quia similique magnam
            deserunt eaque voluptate.
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
