"use client";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="text-light position-relative overflow-hidden d-flex align-items-center"
      style={{ minHeight: "100vh" }}
      data-aos="fade-up"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", objectPosition: "center" }}
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(0,0,0,0.4)" }}
      ></div>

      <Container className="position-relative text-center mt-n5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="fw-bold display-4 mb-3">Vive algo diferente.</h1>
            <p className="lead fs-5 mb-4">
              ROCK EXPERIENCE es una Agencia que conecta marcas y personas
              mediante experiencias digitales y presenciales en tiempo real.
            </p>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              <Button variant="light" size="lg" href="#experiencias">
                Explorar experiencias
              </Button>
              <Button variant="outline-light" size="lg" href="#contacto">
                Quiero participar
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
