import React, { useState } from "react";
import styled from "styled-components";
import Render1 from "../images/banner-slideshow/1.jpg";
import Render2 from "../images/banner-slideshow/2.jpg";
import Render3 from "../images/banner-slideshow/3.jpg";
import Render4 from "../images/banner-slideshow/4.jpg";
import Render5 from "../images/banner-slideshow/5.jpg";
import Render6 from "../images/banner-slideshow/6.jpg";
import CafeOnHills from "../images/projects/cafe_on_hills.png";
import ConcreteResidence from "../images/projects/concrete_residence.jpg";
import ICMR from "../images/projects/ICMR.png";
import Villa from "../images/projects/villa.png";
const IMAGES = {
  "Cafe on Hills": CafeOnHills,
  "The Concrete Residence": ConcreteResidence,
  "ICMR Office with shipping container": ICMR,
  "Villa on Hill Top": Villa,
};
const Wrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const LeftMenu = styled.div`
  width: 300px;
  height: 90vh;
  position: sticky;
  top: 5rem;
  border-right: 2px solid rgb(30, 144, 255);
  flex: 0.3;
  @media only screen and (max-width: 450px) {
    height: auto;
    border-right: none;
    border-bottom: 2px solid rgb(30, 144, 255);
    border-top: 2px solid rgb(30, 144, 255);
    display: flex;
    width: 100%;
  }
`;
const ProjectTitle = styled.p`
  text-align: center;
  padding: 1rem;
  font-size: 1.2rem;
  margin: 1rem;
  cursor: pointer;
  position: relative;
  & > span {
    height: 2px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
  }
  &:hover {
    & > span {
      height: 2px;
      width: 100%;
      background-color: rgb(30, 144, 255);
      position: absolute;
      top: 0;
      left: 0;
    }
    & > span:nth-last-of-type(2) {
      height: 100%;
      width: 2px;
    }
    & > span:nth-last-of-type(3) {
      top: 100%;
    }
    & > span:nth-last-of-type(4) {
      height: 100%;
      width: 2px;
      left: 100%;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
`;

const ProjectImg = styled.img`
  /* background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat; */
  height: auto;
  width: 90%;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;

const Item = ({ val, onClick }) => (
  <ProjectTitle onClick={onClick}>
    {val}
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </ProjectTitle>
);

function Projects() {
  const [singleProject, setsingleProject] = useState("Cafe on Hills");

  return (
    <Wrapper>
      <LeftMenu>
        <Item
          onClick={() => setsingleProject("Cafe on Hills")}
          val="Cafe on Hills"
        />
        <Item
          onClick={() => setsingleProject("The Concrete Residence")}
          val="The Concrete Residence"
        />
        <Item
          onClick={() =>
            setsingleProject("ICMR Office with shipping container")
          }
          val="ICMR Office with shipping container"
        />
        <Item
          onClick={() => setsingleProject("Villa on Hill Top")}
          val="Villa on Hill Top"
        />
      </LeftMenu>
      <RightSection>
        <ProjectImg src={IMAGES[singleProject]} />
      </RightSection>
    </Wrapper>
  );
}

export default Projects;
