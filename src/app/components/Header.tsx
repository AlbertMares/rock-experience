"use client";

import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#inicio">ROCK EXPERIENCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#experiencias">Experiencias</Nav.Link>
            <Nav.Link href="#beneficios">Beneficios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Button variant="primary" href="#contacto">Participar</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
