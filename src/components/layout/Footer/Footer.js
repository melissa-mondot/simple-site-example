import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// images
import fontIcons from "../../../assets/icons/fontAwesome";

const Footer = () => {
  const currDate = new Date();
  return (
    <div className="bg-secondary">
      <Container className="footer">
        <div className="business-info">
          <h1>Business Name</h1>
          <p>
            <i>
              <b>Company tagline noted here</b>
            </i>
          </p>
          <address>
            <p>123 4th St</p>
            <p> Somewhere, Earth</p>
            <p>
              <svg src={fontIcons.phone} />
              555.555.5555
            </p>
            <p>
              <svg src={fontIcons.email} />
              info@companyname.com
            </p>
          </address>
        </div>
      </Container>
      <Container fluid>
        <div>
          <div className="socmed">
            <svg src={fontIcons.instagram} alt="Instagram logo" />
            <svg src={fontIcons.twitter} alt="Twitter logo" />
          </div>
          <div>
            <small>
              Company Name, All Rights Reserved {currDate.getFullYear()}
            </small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
