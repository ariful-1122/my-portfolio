import React from "react";
import styled from "styled-components";

const ServiceGrid = () => {
  return (
    <Content>
      <Wrap>
        <img src="/images/service/physics.png" />
        <h2>Website Pro</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          sunt porro alias possimus voluptatum dignissimos, aliquam, aut officia
          fugiat impedit ad voluptate adipisci, eligendi fuga in natus qui nihil
          et.
        </p>
      </Wrap>
      <Wrap>
        <img src="/images/service/web-design.png" />
        <h2>Web Design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          sunt porro alias possimus voluptatum dignissimos, aliquam, aut officia
          fugiat impedit ad voluptate adipisci, eligendi fuga in natus qui nihil
          et.
        </p>
      </Wrap>
      <Wrap>
        <img src="/images/service/web-development.svg" />
        <h2>Web Developement</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          sunt porro alias possimus voluptatum dignissimos, aliquam, aut officia
          fugiat impedit ad voluptate adipisci, eligendi fuga in natus qui nihil
          et.
        </p>
      </Wrap>
      <Wrap>
        <img src="/images/service/computer.svg" />
        <h2>Web Application</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          sunt porro alias possimus voluptatum dignissimos, aliquam, aut officia
          fugiat impedit ad voluptate adipisci, eligendi fuga in natus qui nihil
          et.
        </p>
      </Wrap>
      <Wrap>
        <img src="/images/service/data.svg" />
        <h2>SPA Development</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          sunt porro alias possimus voluptatum dignissimos, aliquam, aut officia
          fugiat impedit ad voluptate adipisci, eligendi fuga in natus qui nihil
          et.
        </p>
      </Wrap>
      <Wrap>
        <img src="/images/service/blog.svg" />
        <h2>Blog Site Creation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          sunt porro alias possimus voluptatum dignissimos, aliquam, aut officia
          fugiat impedit ad voluptate adipisci, eligendi fuga in natus qui nihil
          et.
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
  }
  h2 {
    font-size: 3rem;
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
