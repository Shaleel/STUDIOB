import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  ${({ imageSrc }) => `background-image:url("${imageSrc}");`}
  margin-top:15rem;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
  @media only screen and (max-width: 768px) {
    height: 50vh;
    margin-top: 5rem;
  }
`;

const Heading = styled.h1`
  font-size: 7rem;
  line-height: 0.9;
  position: absolute;
  top: -3rem;
  text-align: center;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: lightgray;
  }

  @media only screen and (max-width: 768px) {
    font-size: 5rem;
  }

  @media only screen and (max-width: 450px) {
    font-size: 3rem;
    top: -1.5rem;
  }
`;
function Banner({ imagePath, heading }) {
  return (
    <Fade bottom cascade>
      <Wrapper imageSrc={imagePath}>
        <Heading>{heading}</Heading>
      </Wrapper>
    </Fade>
  );
}

export default Banner;
