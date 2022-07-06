import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #242423;
  padding: 2rem;
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  & > p {
    letter-spacing: normal;
  }
`;
const Heading = styled.h3`
  color: white;
  font-weight: normal;
  margin-bottom: 1rem;
`;

const FooterLinks = styled.a`
  padding: 0.5rem;
  color: lightgray;
  &:visited {
    color: white;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Section>
        <Heading>About us</Heading>
        <p>
          More focus on context sensitive that does integrate material and logic
          of construction,in search of archetypal form
        </p>
      </Section>

      <Section>
        <Heading>Quick Links</Heading>
        <FooterLinks href="/">Home</FooterLinks>
        <FooterLinks href="/projects">Projects</FooterLinks>
        <FooterLinks>Services</FooterLinks>
        <FooterLinks>Contact</FooterLinks>
      </Section>

      <Section>
        <Heading>Contact Us</Heading>
        <FooterLinks>
          <i className="fas fa-map-marker-alt" /> A74,omax NRI,Greater
          Noida,Uttar Pradesh
        </FooterLinks>
        <FooterLinks>
          <i className="fas fa-phone" /> +91 9711731559
        </FooterLinks>
        <FooterLinks>
          <i className="fas fa-phone" /> +91 9910587508
        </FooterLinks>
        <FooterLinks>
          <i className="fas fa-envelope" /> email@email.com
        </FooterLinks>
      </Section>
    </FooterWrapper>
  );
}

export default Footer;
