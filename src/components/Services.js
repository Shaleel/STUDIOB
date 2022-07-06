import React from "react";
import styled from "styled-components";
import ConsultantArchitect from "../images/services/consultantArchitect.jpg";
import Hotel from "../images/services/hotel.jpg";
import Factories from "../images/services/factories.jpg";
import Commercial from "../images/services/commercial.jpg";
import Cafe from "../images/services/cafe.jpg";
import Residence from "../images/services/residence.jpg";

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 2rem;
`;
const ServiceList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
const Service = styled.div`
  cursor: pointer;
  margin-top: 1rem;
  min-width: 25%;
  position: relative;
  border-radius: 0.5rem;
  border: 0.5px solid gray;
  h4 {
  }
  img {
    height: 8rem;
    width: 100%;
  }
  :hover {
    box-shadow: 1px 1px 10px rgb(30 144 255 / 23%);
  }
`;
const ServicesIMG = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  width: 100%;
  height: 10rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Info = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;
function Services() {
  return (
    <Wrapper id="services">
      <h2>SERVICES</h2>
      <ServiceList>
        <Service>
          <ServicesIMG src={ConsultantArchitect}></ServicesIMG>
          <Info>
            <h3>Consultant Architects</h3>
          </Info>
        </Service>
        <Service>
          <ServicesIMG src={Hotel}></ServicesIMG>
          <Info>
            <h3>Hotels</h3>
          </Info>
        </Service>
        <Service>
          <ServicesIMG src={Factories}></ServicesIMG>
          <Info>
            <h3>Factories</h3>
          </Info>
        </Service>
      </ServiceList>

      <ServiceList>
        <Service>
          <ServicesIMG src={Commercial}></ServicesIMG>
          <Info>
            <h3>Commercial Hubs</h3>
          </Info>
        </Service>
        <Service>
          <ServicesIMG src={Cafe}></ServicesIMG>
          <Info>
            <h3>Resturants/Cafes</h3>
          </Info>
        </Service>
        <Service>
          <ServicesIMG src={Residence}></ServicesIMG>
          <Info>
            <h3>Residences</h3>
          </Info>
        </Service>
      </ServiceList>
    </Wrapper>
  );
}

export default Services;
