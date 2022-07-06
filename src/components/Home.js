import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import HouseImg from "../images/House.jpg";
import Carousel from "./Carousel";
import Render1 from "../images/banner-slideshow/1.jpg";
import Render2 from "../images/banner-slideshow/2.jpg";
import Render3 from "../images/banner-slideshow/3.jpg";
import Render4 from "../images/banner-slideshow/4.jpg";
import Render5 from "../images/banner-slideshow/5.jpg";
import Render6 from "../images/banner-slideshow/6.jpg";
import Services from "./Services";
import Villa from "../images/projects/villa.png";
import CafeOnHills from "../images/projects/cafe_on_hills.png";
import Blogs from "./Blogs";
const Heading = styled.h1`
  font-size: 4rem;
  line-height: 0.9;
  margin-top: 1rem;
  font-weight: normal;
  margin-bottom: 2rem;
  padding-left: 1rem;
  @media only screen and (max-width: 768px) {
    font-size: 7rem;
    margin-top: 3rem;
  }
  @media only screen and (max-width: 450px) {
    font-size: 2.5rem;
  }
`;

const Wrapper = styled.div`
  margin: 0 10%;
`;

const WebsiteHeading = styled.p`
  font-style: italic;
  font-size: 2rem;
  width: 100%;
  text-align: center;
  margin: 10rem 0;
`;

const ViewMore = styled.a`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-left: 37%;
  border: none;
  transition: color 0.3s ease;
  :hover {
    color: rgb(30, 144, 255);
  }
  ::after {
    content: "View more Projects ...";
  }
`;
function Home() {
  return (
    <div>
      <Wrapper>
        <WebsiteHeading>
          What contribution does the design make to the lives of the inhabitants
          ?
        </WebsiteHeading>
        <Heading>PREFABRICATED STRUCTURES.</Heading>

        <Carousel
          images={[Render1, Render2, Render3, Render4, Render5, Render6]}
        />
        <Services />
        <Banner imagePath={CafeOnHills} heading="Cafe on Hills" />
        <Banner imagePath={Villa} heading="Villa on hill top" />
        <ViewMore href="/projects" />
        <Blogs />
      </Wrapper>
    </div>
  );
}

export default Home;
