import React from "react";
import Col from "react-bootstrap/Col";

const ImgCard = ({ src }) => (
  <Col
    className="img-card"
    style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
  >
    {""}
  </Col>
);

export default ImgCard;
