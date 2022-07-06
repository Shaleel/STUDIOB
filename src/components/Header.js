import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  background-color: ${({ backgroundSolid }) =>
    backgroundSolid ? "rgb(255, 255, 255,85%)" : "transparent"};

  transition: all 0.2s ease;
  z-index: 1000;
`;
const MobileMenu = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  right: ${({ mobileHeader }) => (mobileHeader ? "0%" : "-100%;")};
  width: 200px;
  height: 100%;
  padding-left: 2rem;
  z-index: 1000;
  padding-right: 1rem;
  transition: all 0.3s ease;
  box-shadow: black 0px 20px 30px 0px;
  & > a {
    margin-bottom: 2rem;
  }
`;
const HeaderLinksWrapper = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  @media only screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;
const HeaderLink = styled.div`
  font-weight: 500;
  position: relative;
  cursor: pointer;
  color:black${({ imageSrc }) => `background-image:url("${imageSrc}");`}
    &
    > span {
    position: absolute;
    height: 3px;
    width: 0;
    background-color: rgb(30, 144, 255);
    bottom: -0.2rem;
    left: 0;
    transition: all 0.2s ease;
    ${({ path, value }) => (path === value ? "width:100%;" : "width:0%;")}
  }

  &:hover {
    & > span {
      width: 100%;
    }
  }
  &:visited {
    color: black;
  }
`;
const BTN = styled.a`
  background-color: rgb(30, 144, 255);
  padding: 0.8rem;
  border-radius: 0.4rem;
  color: white;
  font-weight: bold;
  border: none;

  &:visited {
    color: white;
  }
`;
const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;

  @media only screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
`;
export const Logo = styled.div`
  flex: 1;
  text-transform: capitalize;
  font-family: "Work Sans", sans-serif;
  font-weight: bolder;
  font-size: 2rem;
  padding: 2rem;
  padding-top: -0.1rem;
  & > span {
    color: rgb(30, 144, 255);
    filter: drop-shadow(0.5px 0.5px 0.5px rgb(30, 144, 255));
  }
  @media only screen and (min-width: 450) {
    & {
      padding: 1rem;
    }
  }
`;
const MenuIcon = styled.button`
  flex: 0.5;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  color: black;
  @media only screen and (min-width: 768px) {
    & {
      display: none;
    }
  }
`;

function Header({ mobileHeader, setmobileHeader, backgroundSolid, path }) {
  return (
    <HeaderWrapper
      backgroundSolid={backgroundSolid}
      mobileHeader={mobileHeader}
    >
      <MobileMenu mobileHeader={mobileHeader}>
        <CloseBtn onClick={() => setmobileHeader(false)}>
          <i className="fa fa-close"></i>
        </CloseBtn>
        <Link to="/">
          <HeaderLink path={path} value="home">
            HOME
            <span></span>
          </HeaderLink>
        </Link>

        <Link to="/projects">
          <HeaderLink path={path} value="projects">
            PROJECTS
            <span></span>
          </HeaderLink>
        </Link>

        <Link to="/#services">
          <HeaderLink path={path} value="services">
            SERVICES
            <span></span>
          </HeaderLink>
        </Link>
      </MobileMenu>

      <Link style={{ flex: 1 }} to="/">
        <Logo>
          STUDIO<span>B</span>
        </Logo>
      </Link>
      <HeaderLinksWrapper>
        <Link to="/">
          <HeaderLink path={path} value="home">
            HOME
            <span></span>
          </HeaderLink>
        </Link>

        <Link to="/projects">
          <HeaderLink path={path} value="projects">
            PROJECTS
            <span></span>
          </HeaderLink>
        </Link>

        <Link to="/#services">
          <HeaderLink path={path} value="services">
            SERVICES
            <span></span>
          </HeaderLink>
        </Link>
      </HeaderLinksWrapper>
      <MenuIcon onClick={() => setmobileHeader(true)}>
        <i className="fas fa-bars"></i>
      </MenuIcon>
    </HeaderWrapper>
  );
}

export default Header;
