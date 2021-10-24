import React from "react";
import Col from "react-bootstrap/Col";

const ImgCard = ({ src }) => (
  <Col
    className="img-card m-0 p-0"
    style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
  >
    {""}
  </Col>
);

export default ImgCard;
