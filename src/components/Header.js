import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import Login from "./Login";
import Register from "./Register";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <div className="d-flex">
              <Login />
              <Register />
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
