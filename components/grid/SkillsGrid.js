import React from "react";
import styled from "styled-components";
import {FaReact, FaNode, FaJsSquare, FaHtml5} from "react-icons/fa";
import {SiNextDotJs, SiRedux, SiHtml5} from "react-icons/si";

function SkillsGrid() {
  return (
    <Content>
      <SkillsLeft>
        <WrapHTML>
          <p>Html Css</p>
          <p>95%</p>
        </WrapHTML>
        <WrapJS>
          <p>JavaScript</p>
          <p>85%</p>
        </WrapJS>
        <WrapReact>
          <p>React</p>
          <p>90%</p>
        </WrapReact>
        <WrapNodeJs>
          <p>NodeJs</p>
          <p>80%</p>
        </WrapNodeJs>
        <WrapNextJs>
          <p>NextJs</p>
          <p>95%</p>
        </WrapNextJs>
        <WrapRedux>
          <p>Redux</p>
          <p>98%</p>
        </WrapRedux>
      </SkillsLeft>
      <SkillsRight>
        <div>
          <i>
            <FaReact />
          </i>
          <i>
            <SiNextDotJs />
          </i>
        </div>
        <div>
          <i>
            <FaJsSquare />
          </i>
          <i>
            <FaNode />
          </i>
        </div>
        <div>
          <i>
            <SiRedux />
          </i>
          <i>
            <FaHtml5 />
          </i>
        </div>
      </SkillsRight>
    </Content>
  );
}

export default SkillsGrid;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 2.5rem;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 2.5rem;
  }
`;
const SkillsLeft = styled.div``;
const WrapHTML = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 3rem 0;

  p {
    font-size: 1.6rem;
    color: #ddd;
    margin-bottom: 0.8rem;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    top: 100%;
    background: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 95%;
    height: 5px;
    top: 100%;
    background-image: linear-gradient(-224deg, #fd4766, #337dff);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 2;
  }
`;

const WrapJS = styled(WrapHTML)`
  &::before {
    width: 85% !important;
  }
`;

const WrapReact = styled(WrapHTML)`
  &::before {
    width: 90% !important;
  }
`;

const WrapNodeJs = styled(WrapHTML)`
  &::before {
    width: 80% !important;
  }
`;

const WrapNextJs = styled(WrapHTML)`
  &::before {
    width: 95% !important;
  }
`;

const WrapRedux = styled(WrapHTML)`
  &::before {
    width: 98% !important;
  }
`;

const SkillsRight = styled.div`
  div {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  i {
    font-size: 8rem;
    color: #fff;
  }
`;
