import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Hero = ({ src }) => (
  <Row
    className="hero m-0"
    style={{
      backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      color: "white",
    }}
  >
    <Col className="mx-auto pt-3" xs={10}>
      <h1 className="mt-5">Lorem Ipsum Dineth</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <Button className="mb-5">et dolore</Button>
    </Col>
  </Row>
);

export default Hero;
