import React from "react";
import styled from "styled-components";
import Link from "next/link";

function ProjectGrid() {
  return (
    <Content>
      <Wrap>
        <h1>
          (I) <span>NextJs</span> Project
        </h1>
        <a target="_blank" href="https://disney-nextjs.vercel.app/">
          <img src="/images/project/perdis.png" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <h1>
          (II) <span>React</span> Project
        </h1>
        <a target="_blank" href="https://contact-app-jade.vercel.app/">
          <img src="/images/project/contact.png" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <h1>
          (III) <span>NodeJs</span> Project
        </h1>
        <a target="_blank" href="/">
          <img src="/images/project/lifi.png" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <h1>
          (IV) <span>NextJs</span> Project
        </h1>
        <a target="_blank" href="https://nextjs-blog-project-ruddy.vercel.app/">
          <img src="/images/project/blog.png" alt="" />
        </a>
      </Wrap>
    </Content>
  );
}

export default ProjectGrid;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 2.5rem;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 2rem;
  }
`;

const Wrap = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  color: #000;

  h1 {
    font-size: 2.5rem;

    span {
      background-image: linear-gradient(
        to right top,
        #f056dc,
        #ff4c7f,
        #ff8c1c,
        #c5c500,
        #12eb67
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;

      &::before {
        content: "NextJs";
        opacity: 0.9;
        position: absolute;
        left: 0;

        width: 200%;
        height: 150%;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
  }
  a {
    color: #000;
    z-index: 5;
  }
`;
