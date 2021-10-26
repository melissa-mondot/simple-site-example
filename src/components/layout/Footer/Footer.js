import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// images
import { instagram, facebook, phone, email } from "../../../assets/icons";

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
              <i>
                <Image src={phone}  />
              </i>{" "}
              555.555.5555
            </p>
            <p>
              <i>
                <Image src={email}  />
              </i>{" "}
              info@companyname.com
            </p>
          </address>
        </div>
      </Container>
      <Container fluid >
        <div >
          <div
            className="socmed"
            
          >
            <Image src={instagram} alt="Instagram logo" />
            <Image  src={facebook} alt="Facebook logo" />
          </div>
          <div >
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
