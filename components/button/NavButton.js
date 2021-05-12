import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components";
import Link from "next/link";

function NavButton() {
  const [isChecked, setIsChecked] = useState(true);

  function checkHandler(e) {
    setIsChecked(!isChecked);
    if (isChecked) {
      document.querySelector(".NavBack").style = "transform:scale(80)";
      document.querySelector(".Nav").style.width = "100%";
      document.querySelector(".Nav").style.opacity = "1";
    } else {
      document.querySelector(".NavBack").style = "transform:scale(1)";
      document.querySelector(".Nav").style.width = "0";
      document.querySelector(".Nav").style.opacity = "0";
    }
  }

  function closeHandler() {
    setIsChecked(false);
    document.querySelector(".NavBack").style = "transform:scale(1)";
    document.querySelector(".Nav").style.width = "0";
    document.querySelector(".Nav").style.opacity = "0";
  }

  return (
    <Navigation>
      <NavInput onChange={checkHandler} type="checkbox" id="navi-toggle" />
      <NavigationButton className="navButton" htmlFor="navi-toggle">
        <NavigationIcon className="resetCross">&nbsp;</NavigationIcon>
      </NavigationButton>
      <NavigationBackground className="NavBack"></NavigationBackground>
      <NavigationNav className="Nav">
        <ul>
          <li onClick={closeHandler}>
            <Link href="/#home">
              <a>Home</a>
            </Link>
          </li>
          <li onClick={closeHandler}>
            <Link href="/#about">
              <a>About</a>
            </Link>
          </li>
          <li onClick={closeHandler}>
            <Link href="/#project">
              <a>Project</a>
            </Link>
          </li>
          <li onClick={closeHandler}>
            <Link href="/#service">
              <a>Service</a>
            </Link>
          </li>
          <li onClick={closeHandler}>
            <Link href="/#skills">
              <a>Skills</a>
            </Link>
          </li>
          <li onClick={closeHandler}>
            <Link href="/#contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </NavigationNav>
    </Navigation>
  );
}

export default NavButton;

const Navigation = styled.div`
  display: inline-block;
`;

const NavigationIcon = styled.span`
  position: relative;
  margin-top: 2.3rem;
  &,
  &::before,
  &::after {
    width: 2.5rem;
    height: 1.2px;
    background: #333;
    display: inline-block;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }
  &::before {
    top: -0.7rem;
  }
  &::after {
    top: 0.7rem;
  }
`;

const NavigationButton = styled.label`
  display: inline-block;
  height: 5rem;
  width: 5rem;
  background: #fff;
  border-radius: 50%;
  position: fixed;
  top: 1.2rem;
  right: 2rem;
  z-index: 2000;
  text-align: center;
  cursor: pointer;

  &:hover ${NavigationIcon}::before {
    top: -0.9rem;
  }
  &:hover ${NavigationIcon}::after {
    top: 0.9rem;
  }
`;

const NavInput = styled.input`
  display: none;

  &:checked + ${NavigationButton} ${NavigationIcon} {
    background: transparent;
  }

  &:checked + ${NavigationButton} ${NavigationIcon}::before {
    top: 0;
    transform: rotate(135deg);
  }
  &:checked + ${NavigationButton} ${NavigationIcon}::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;

const NavigationBackground = styled.div`
  height: 3rem;
  width: 3rem;
  background: #fff;
  border-radius: 50%;
  background-image: radial-gradient(blue, orange);
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  z-index: 1000;
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  /* transform: scale(60); */
`;

const NavigationNav = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1500;

  opacity: 0;
  width: 0;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;

    li {
      margin: 0.3rem;
      width: 100%;
    }

    a {
      color: #fff;
      text-decoration: none;
      display: block;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 100;
      padding: 0.8rem 2rem;
      letter-spacing: 1.4px;
      font-size: 3rem;

      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        white 50%
      );
      background-size: 220%;
      transition: all 0.3s;

      &:hover {
        background-position: 100%;
        color: #000;
        transform: translateX(1rem);
      }
    }
  }
`;
