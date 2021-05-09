import React from "react";
import styled from "styled-components";
import {FaPhoneAlt, FaEnvelope} from "react-icons/fa";

function ContactGrid() {
  return (
    <Content>
      <Wrap>
        <form>
          <Controls>
            <label htmlFor="name">Name</label>
            <input
              required
              id="name"
              placeholder="Type Your Name"
              type="text"
            />
          </Controls>
          <Controls>
            <label htmlFor="email">E-Mail</label>
            <input
              required
              id="email"
              type="email"
              placeholder="Type Your Email"
              type="text"
            />
          </Controls>
          <Controls>
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Type Your Message"
              id="message"
              rows="5"
            ></textarea>
          </Controls>
          <Cta>
            <button>Send Message</button>
          </Cta>
        </form>
      </Wrap>
      <WrapRight>
        <h1>Hire Me...</h1>
        <p>
          I am working as a freelancer.If You need to do something with my
          skills through freelance.You Can Hire Me Now.I am available to do your
          work!
        </p>
        <ContactResource>
          <p>
            <i>
              <FaPhoneAlt />
            </i>
          </p>
          <Tel>
            <a href="tel:+88 01799732138">+88 01799732138</a>
            <a href="tel:+88 01627242367">+88 01627242367</a>
          </Tel>
        </ContactResource>
        <ContactResource>
          <p>
            <i>
              <FaEnvelope />
            </i>
          </p>
          <Tel>
            <a href="mailto:greenheart970@gmail.com">greenheart970@gmail.com</a>
            <a href="mailto:gmailexample@gmail.com">gmailexample@gmail.com</a>
          </Tel>
        </ContactResource>
      </WrapRight>
    </Content>
  );
}

export default ContactGrid;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 2.5rem;
`;

const Wrap = styled.div``;
const Controls = styled.div`
  margin: 2rem 0;
  label {
    display: block;
    color: #000;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  input {
    width: 80%;
    height: 4rem;
    font-size: 1.6rem;
    padding: 0.8rem;
    border-style: solid;
    border-width: 2px;
    overflow: hidden;
    border-image: linear-gradient(
        45deg,
        #1c99fe 20.69%,
        #7644ff 50.19%,
        rgba(18, 235, 103, 0.9) 79.69%
      )
      1;
    border-radius: 5px;
  }

  textarea {
    width: 80%;
    font-size: 1.6rem;
    padding: 0.8rem;
    border-style: solid;
    border-width: 2px;
    overflow: hidden;
    border-image: linear-gradient(
        45deg,
        #1c99fe 20.69%,
        #7644ff 50.19%,
        rgba(18, 235, 103, 0.9) 79.69%
      )
      1;
    border-radius: 5px;
    resize: none;
  }
`;

const Cta = styled.div`
  margin-top: 1rem;

  button {
    padding: 1.3rem 3rem;
    background-image: linear-gradient(
      45deg,
      #1c99fe 20.69%,
      #7644ff 50.19%,
      #fd4766 79.69%
    );
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1.4rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transition: all 0.3s ease;
      background-size: 200%;
    }
  }
`;

const WrapRight = styled.div`
  h1 {
    font-size: 5rem;
    font-weight: 900;
    margin-top: 2rem;
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 1.4px;
  }
`;

const ContactResource = styled.div`
  margin: 2rem 0;
  display: flex;
  width: 80%;

  p {
    display: flex;
    align-items: center;

    i {
      color: #5882fd;
      background: #edf5ff;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Tel = styled.div`
  margin-left: 2rem;
  a {
    text-decoration: none;
    color: #000;
    font-size: 2rem;
    display: block;
    font-weight: 400;
  }
`;
