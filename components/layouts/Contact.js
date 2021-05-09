import React from "react";
import styled from "styled-components";
import ContactGrid from "../grid/ContactGrid";

function Contact() {
  return (
    <Container>
      <ContactTitle>
        <p>Get In Touch</p>
        <h1>Contact Me</h1>
      </ContactTitle>
      <ContactGrid />
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  padding: 8rem calc(3vw + 5px);
`;

const ContactTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  p {
    font-size: 1.4rem;
    background: linear-gradient(
      120deg,
      rgb(28, 153, 254) 20.69%,
      rgb(118, 68, 255) 50.19%,
      rgb(253, 71, 102) 79.69%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 20rem;
  }

  h1 {
    font-size: 5rem;
    color: #0e1525;
    text-transform: uppercase;
    text-shadow: 2 2rem 4rem rgba(28, 153, 254, 0.5);
  }
`;
