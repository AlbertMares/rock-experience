"use client";

import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="py-5 text-light"
      style={{
        background: "linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="fw-bold">Vive algo diferente.</h1>
            <p className="lead">
              Descubre experiencias creadas para conectar marcas, tecnología y personas.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Button variant="light" href="#experiencias">
                Explorar experiencias
              </Button>
              <Button variant="outline-light" href="#contacto">
                Quiero participar
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src="/hero.jpg"
              alt="Rock Experience"
              width={600}
              height={400}
              className="rounded shadow-lg"
              priority
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
