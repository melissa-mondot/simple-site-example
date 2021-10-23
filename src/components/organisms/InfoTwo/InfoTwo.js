import React from "react";
import Row from "react-bootstrap/Row";
import { InfoCard, IconCard } from "../../molecules";

const InfoTwo = ({ title, text, linkText, icons }) => (
  <Row className="info-2 d-flex align-items-center m-0" xs={1} md={2}>
    <InfoCard title={title} text={text} linkText={linkText} />
    <IconCard icons={icons} />
  </Row>
);

export default InfoTwo;
