import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Hero = ({ src }) => (
  <div className="hero">
    <div class="movie-wrapper">
      <video src={src} autoPlay muted loop preload="true">
        <source src={src} type="video/mp4" />
        Video tag is not supported in this browser.
      </video>
    </div>
    <Row>
      <Col className="hero-text">
        <h1>Lorem Ipsum Dineth</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <Button>et dolore</Button>
      </Col>
    </Row>
  </div>
);

export default Hero;
