import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import { GiCook } from "react-icons/gi";
import styled from "styled-components";

function NavbarHeader() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Div>
              <GiCook className="mb-1" />
              Cookle
            </Div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/wishlist">
                <FiHeart className="ml-2" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

const Div = styled.div`
  align-items: center;
  font-weight: 500;
`;

export default NavbarHeader;
