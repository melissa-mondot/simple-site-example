import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import { NavLink } from "react-router-dom";

// TODO: pass in var for button. Hide button unless var is passed in to Banner

const Banner = ({ src, text, btnTxt, title, right }) => {
  const offsetBy = right ? 6 : 1;
  return (
    <Row
      className="banner m-0"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <Col className="my-auto" xs={{ span: 6, offset: offsetBy }}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button>{btnTxt}</Button>
      </Col>
    </Row>
  );
};

export default Banner;
