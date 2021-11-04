import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const IconCard = ({ icons }) => {
  console.log(icons);
  const iconTiles = icons.map((key, icon) => (
    <Col key={key} className="animated-icon">
      <i className={key[0]} />
    </Col>
  ));
  return (
    <Col className="icon-card">
      {" "}
      <Row className="icons" xs={2}>
        {iconTiles}
      </Row>{" "}
    </Col>
  );
};

export default IconCard;
