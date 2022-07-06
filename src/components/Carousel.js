import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    height: 45vh;
  }
`;
const Slider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;
const Image = styled.img`
  width: 100%;
  height: 95vh;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    height: 45vh;
  }
`;
const ButtonsWrapper = styled.div`
  position: absolute;
  width: 95%;
  top: 50%;
  left: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 1000;
`;
const Button = styled.button`
  background-color: rgba(0, 0, 0, 65%);
  color: white;
  border: none;
  padding: 1.5rem;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 75%);
  }
`;
function Carousel({ images }) {
  const [counter, setcounter] = useState(0);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setcounter((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );

    return () => {
      resetTimeout();
    };
  }, [counter]);

  return (
    <Wrapper>
      <ButtonsWrapper>
        <Button
          onClick={() => {
            counter === 0 ? setcounter(images.length - 1) : setcounter(0);
          }}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </Button>
        <Button
          onClick={() => {
            counter < images.length - 1
              ? setcounter(counter + 1)
              : setcounter(0);
          }}
        >
          <i class="fa-solid fa-arrow-right"></i>
        </Button>
      </ButtonsWrapper>
      <Slider style={{ transform: `translate3d(${-counter * 100}%, 0, 0)` }}>
        {images.map((image, index) => (
          <Image key={index} src={image} />
        ))}
      </Slider>
    </Wrapper>
  );
}

export default Carousel;
