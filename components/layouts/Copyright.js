import React from "react";
import styled from "styled-components";
import {FiFacebook, FiTwitter, FiLinkedin, FiInstagram} from "react-icons/fi";

function Copyright() {
  return (
    <Container>
      <Content>
        <Wrap>
          <CopyRight>Copyright © 2021 Taken. All Rights Reserved.</CopyRight>
        </Wrap>
        <Wrap>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100009063073831"
          >
            <i>
              <FiFacebook />
            </i>
          </a>
          <a target="_blank" href="https://twitter.com/ariful_1122">
            <i>
              <FiTwitter />
            </i>
          </a>
          <a href="/">
            <i>
              <FiLinkedin />
            </i>
          </a>
          <a href="/">
            <i>
              <FiInstagram />
            </i>
          </a>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Copyright;

const Container = styled.div`
  background: #0e1525;
  padding: 3rem calc(3vw + 5px);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled.div`
  color: #fff;
  display: flex;

  a {
    color: #fff;
    font-size: 1.6rem;
    display: inline-block;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: #292f4e;
    border-radius: 50%;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    i {
      font-size: 2rem;
      font-weight: 100;
      margin-top: 0.5rem;
    }
  }
`;

const CopyRight = styled.p`
  font-size: 1.4rem;
`;
