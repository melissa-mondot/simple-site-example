import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = ({ logo }) => (
  <Navbar className="position-absolute" bg="transparent" variant="transparent">
    <Container>
      <Navbar.Brand className="d-flex align-items-center">
        <img src={logo} alt="" height="60" />
        <p className="text-black-50">Company Name</p>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
