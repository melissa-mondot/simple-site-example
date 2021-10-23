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
        <div className="business-info d-flex flex-column pt-4 mx-3">
          <h1>Business Name</h1>
          <p>
            <i>
              <b>Company tagline noted here</b>
            </i>
          </p>
          <address>
            <p className="mb-0">123 4th St</p>
            <p className="mb-0"> Somewhere, Earth</p>
            <p className="mb-0">
              <i>
                <Image src={phone} style={{ height: "1rem" }} />
              </i>{" "}
              555.555.5555
            </p>
            <p>
              <i>
                <Image src={email} style={{ height: "1rem" }} />
              </i>{" "}
              info@companyname.com
            </p>
          </address>
        </div>
      </Container>
      <Container fluid className="px-0">
        <div className="pt-2">
          <div
            className="socmed d-flex justify-content-around"
            style={{ height: "3rem" }}
          >
            <Image className="my-1" src={instagram} alt="Instagram logo" />
            <Image className="my-1" src={facebook} alt="Facebook logo" />
          </div>
          <div className="mt-4 p-1">
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
