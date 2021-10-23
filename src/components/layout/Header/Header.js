import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

// // images

const Header = () => (
  <Navbar className="position-absolute" bg="transparent" variant="transparent">
    <Container>
      <Navbar.Brand>
        {/* <img src={logo} alt="" height="30" /> */}
        <h1 className="text-black-50">Company Logo</h1>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
