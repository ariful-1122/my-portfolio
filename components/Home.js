import Link from "next/link";
import React from "react";
import styled from "styled-components";
import About from "./layouts/About";
import Services from "./layouts/Services";
import Project from "./layouts/Project";
import Skills from "./layouts/Skills";
import Contact from "./layouts/Contact";
import Copyright from "./layouts/Copyright";

function Home() {
  return (
    <>
      <HeroBackground>
        <Container>
          <h1>
            Hello, I'm <span>Ariful</span> <br /> I am a Web Developer
          </h1>
        </Container>
        <ContactButton>
          <Link href="#contact">Contact me</Link>
        </ContactButton>
      </HeroBackground>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="service">
        <Services />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Copyright />
      </div>
    </>
  );
}

export default Home;

const HeroBackground = styled.div`
  height: 100vh;
  padding: 0 calc(3vw + 5px);
  background-image: url("/images/pexels-nick-demou-2473183.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;

  @media only screen and (max-width: 768px) {
    height: 60vh;
  }
   @media only screen and (max-width: 576px) {
    height: 50vh;
  }
`;

const Container = styled.div`
  color: #fff;
  display: flex;
  align-items: center;

  h1 {
    display: block;
    font-size: 7rem;
    padding: 3rem 0;
    margin-top: 20%;

    background: #ffff00;
    background: -webkit-linear-gradient(
      to left,
      #ffff00 0%,
      #05c1ff 50%,
      #ffff00 100%
    );
    background: -moz-linear-gradient(
      to left,
      #ffff00 0%,
      #05c1ff 50%,
      #ffff00 100%
    );
    background: linear-gradient(to left, #ffff00 0%, #05c1ff 50%, #ffff00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (max-width: 768px) {
      font-size: 5rem;
    }
  }
`;

const ContactButton = styled.div`
  a {
    padding: 1.5rem 4rem;
    display: inline-block;
    cursor: pointer;
    font-size: 2rem;
    text-transform: uppercase;
    background-image: linear-gradient(
      to right top,
      #0c1a30,
      #004d73,
      #00868f,
      #00be71,
      #a8eb12
    );
    overflow: hidden;
    text-decoration: none;
    color: #fff;
    border-radius: 10rem;
    transition: all 0.5s ease;
    border: 1px solid #0c1a30;
    font-weight: 300;

    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      -1px 5px 15px -4px rgba(255, 44, 244, 0);
    box-shadow: 0px 10px 13px -7px #000000,
      -1px 5px 15px -4px rgba(255, 44, 244, 0);

    &:hover {
      transform: translateY(-3px);
      background-image: linear-gradient(
        to right top,
        #a8eb12,
        #00be71,
        #00868f,
        #004d73,
        #0c1a30
      );
    }
  }
`;
