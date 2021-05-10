import React from "react";
import styled from "styled-components";

const ServiceGrid = () => {
  return (
    <Content>
      <Wrap>
        <img src="/images/service/physics.png" />
        <h2>Website Pro</h2>
        <p>
          I can build any kind of Website Using Modern Web
          Technologies.Technologies like React, NextJs, NodeJs, MongoDB e.t.c
          Which are very popular on current Web World.
        </p>
      </Wrap>
      <Wrap>
        <img src="/images/service/web-design.png" />
        <h2>Web Design</h2>
        <p>
          I will design high quality and very Professional Web Design and fully
          Responsive Website Design focused on your specific business needs,
          which are of the highest quality at affordable prices.
        </p>
      </Wrap>
      <Wrap>
        <img src="/images/service/web-development.svg" />
        <h2>Web Developement</h2>
        <p>
          Web Developement is one of the most demandable Profession now a
          days.And I do this with full of Passion.In this Sector I have 2 Years
          more Experience
        </p>
      </Wrap>
      <Wrap>
        <img src="/images/service/computer.svg" />
        <h2>Web Application</h2>

        <p>
          I am a full stack web developer with over 4 years of experience. I am
          well experience in developing small to large scale web application.
        </p>
      </Wrap>
      <Wrap>
        <img src="/images/service/data.svg" />
        <h2>SPA Development</h2>

        <p>
          Single Page Applicaton is one of the most used Web Term now a
          days.Which is Super Populer and its using big Giant Companies.To Do
          that knock me
        </p>
      </Wrap>
      <Wrap>
        <img src="/images/service/blog.svg" />
        <h2>Blog Site Creation</h2>
        <p>
          There is only way to expose your articles public blog is the best
          way.I can develop this kind of site with affordable Price
        </p>
      </Wrap>
    </Content>
  );
};

export default ServiceGrid;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 2.5rem;

  @media only screen and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 2.5rem;
  }

  @media only screen and (max-width: 576px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 2.5rem;
  }
`;

const Wrap = styled.div`
  text-align: center;
  background: #2f323a;
  color: #fff;
  padding: 3rem;
  margin: 1rem 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  backface-visibility: hidden;
  overflow: hidden;
  -webkit-box-shadow: 0px 17px 31px -11px #000000;
  box-shadow: 0px 17px 31px -11px #000000;

  img {
    width: 30%;

    @media only screen and (max-width: 576px) {
      width: 20%;
    }
  }
  h2 {
    font-size: 2.4rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    color: rgba(202, 197, 190, 0.75);
  }

  &:hover {
    transform: translateY(-1px) scale(1.04);
    -webkit-box-shadow: 0px 17px 31px 0px #000000;
    box-shadow: 0px 17px 31px 0px #000000;
  }
`;
