import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// icons

// TODO: subtle animation for icons

const IconCard = ({ icons }) => {
  console.log(icons);
  const iconTiles = icons.map((key, icon) => (
    <div key={key} className="animated-icon">
      
    </div>
  ));
  return (
    <Col className="icon-card">
      {" "}
      <Row xs={2}>{iconTiles}</Row>{" "}
    </Col>
  );
};

export default IconCard;
