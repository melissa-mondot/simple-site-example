import React from "react";
import Row from "react-bootstrap/Row";
import { InfoCard, ImgCard } from "../../molecules";

const InfoOne = ({ title, text, linkText, src }) => (
  <Row className="info info-1" xs={1} md={2}>
    <InfoCard title={title} text={text} linkText={linkText} />
    <ImgCard src={src} />
  </Row>
);

export default InfoOne;
