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
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "20rem",
        margin: "0",
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
