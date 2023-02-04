import React from "react";
import Carousel from "react-bootstrap/Carousel";

const HeroSection = () => {
  return (
    <Carousel fade className="hero-section">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/cover/cover-image.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/cover/cover-image-1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/cover/cover-image-2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
