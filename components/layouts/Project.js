import React from "react";
import styled from "styled-components";
import ProjectGrid from "../grid/ProjectGrid";

const Project = () => {
  return (
    <Container>
      <ProjectTitle>
        <p>My Projects</p>
        <h1>Some of My Projects</h1>
      </ProjectTitle>
      <ProjectGrid />
    </Container>
  );
};

export default Project;

const Container = styled.div`
  background: #f1f1f1;
  padding: 8rem calc(3vw + 5px);
`;

const ProjectTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 8rem;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;

    @media only screen and (max-width: 768px) {
      font-size: 3.5rem;
      font-weight: 700;
    }
  }

  p {
    background-image: linear-gradient(
      to right bottom,
      #f45fcd,
      #5b36b0,
      #3f49bd,
      #5ff4fb
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 10rem;
    font-size: 1.4rem;
  }
`;
