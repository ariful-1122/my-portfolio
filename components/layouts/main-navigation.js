import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  FcHome,
  FcInfo,
  FcBusinessContact,
  FcBiohazard,
  FcServices,
} from "react-icons/fc";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";

function MainNavigation() {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 80) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    });
  }, []);

  return (
    <Container className={navBg && "active"}>
      <Logo>
        <Link href="/">Arif</Link>
      </Logo>
      <NavMenu>
        <Link href="/">
          <a>
            <FcHome />
            <span>Home</span>
          </a>
        </Link>
        <Link href="#about">
          <a>
            <FcInfo />
            <span>About</span>
          </a>
        </Link>
        <Link href="/#project">
          <a>
            <Project />
            <span>Project</span>
          </a>
        </Link>
        <Link href="/#service">
          <a>
            <FcServices />
            <span>Services</span>
          </a>
        </Link>
        <Link href="/#skills">
          <a>
            <FcBiohazard />
            <span>Skills</span>
          </a>
        </Link>
        <Link href="/#contact">
          <a>
            <FcBusinessContact />
            <span>Contact</span>
          </a>
        </Link>
      </NavMenu>
    </Container>
  );
}

export default MainNavigation;

const Project = styled(AiOutlineFundProjectionScreen)`
  color: #ffeb3b;
`;

const Container = styled.nav`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 10;
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  -webkit-box-shadow: 1px 15px 14px -14px pink;
  box-shadow: 1px 5px 14px -14px pink;
`;

const Logo = styled.div`
  a {
    text-decoration: none;
    font-size: 3rem;
    text-transform: uppercase;
    color: #fff;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: #fff;
    display: inline-block;
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    span {
      letter-spacing: 1.4px;
      margin-left: 5px;
      position: relative;

      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 0;
        height: 2px;
        background: rgb(110, 51, 223);
        background: linear-gradient(
          90deg,
          rgba(110, 51, 223, 1) 48%,
          rgba(77, 173, 193, 1) 99%
        );
        transition: all 0.3s ease;
      }
    }

    &:hover {
      span::after {
        width: 100%;
      }
    }
  }
`;
