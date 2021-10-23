import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

const TextCarousel = ({ items }) => {
  // console.log(items);
  const slides = items.map((key, item) => (
    <Carousel.Item key={key}>
      <Carousel.Caption className="text-dark">
        <p>
          <b>{items[item][0]}</b>
        </p>
        <p>~ {items[item][1]}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return (
    <>
      <Container className="text-carousel mx-auto">
        <h4 className="text-center mt-4">
          What some of our clients are saying:
        </h4>
        <Carousel variant="dark">{slides}</Carousel>
      </Container>
    </>
  );
};

export default TextCarousel;
