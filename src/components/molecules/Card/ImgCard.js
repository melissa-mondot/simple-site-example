import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const ImgCard = ({ image, alt }) => (
  <Col className="img-card m-0 p-0">
    <Image fluid src={image} alt={alt} />
  </Col>
);

export default ImgCard;
