import React from "react";
import styled from "styled-components";
import ServiceGrid from "../grid/serviceGrid";

function Contact() {
  return (
    <Container>
      <h1>My Services</h1>
      <ServiceGrid />
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  background-image: linear-gradient(
    to right top,
    rgba(255, 76, 127, 0.9),
    rgba(255, 140, 28, 0.9),
    rgba(197, 197, 0, 0.9),
    rgba(18, 235, 103, 0.9)
  );
  min-height: 80vh;
  background-size: cover;
  background-position: center;
  padding: 3rem calc(3vw + 5px);

  h1 {
    text-transform: uppercase;
    font-size: 5rem;
    text-align: center;
    padding: 4rem 0;

    @media only screen and (max-width: 768px) {
      font-size: 4rem;
      padding: 3rem 0;
    }
  }
`;
