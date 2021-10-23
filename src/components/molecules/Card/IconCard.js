import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// icons

// TODO: subtle animation for icons

const IconCard = ({ icons }) => {
  // console.log(icons);
  const iconTiles = icons.map((key, icon) => (
    <Image
      key={key}
      className="animated-icon"
      src={icons[icon][0]}
      alt={`Icon of ${icons[icon][1]}`}
    />
  ));
  return (
    <Col className="icon-card m-0 p-0">
      <Row className="gx-0 p-3" xs={2}>
        {iconTiles}
      </Row>
    </Col>
  );
};

export default IconCard;
