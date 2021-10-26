import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = ({ logo }) => (
  <Navbar className="nav" bg="transparent" variant="transparent">
    <Container>
      <Navbar.Brand>
        <img src={logo} alt="" height="60" />
        <p >Company Name</p>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
