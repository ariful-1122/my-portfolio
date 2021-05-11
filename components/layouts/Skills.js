import React from "react";
import styled from "styled-components";
import SkillsGrid from "../grid/SkillsGrid";

const Skills = () => {
  return (
    <Container>
      <SkillsTitle>
        <p>My Expertise</p>
        <h1>My Skills</h1>
      </SkillsTitle>
      <SkillsGrid />
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  background: #0e1525;
  padding: 10rem calc(3vw + 5px);
`;

const SkillsTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  p {
    font-size: 1.4rem;
    background: linear-gradient(
      120deg,
      #1c99fe 20.69%,
      #7644ff 50.19%,
      #fd4766 79.69%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 20rem;
  }

  h1 {
    font-size: 5rem;
    color: #fff;
    text-transform: uppercase;

    @media only screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }
`;
