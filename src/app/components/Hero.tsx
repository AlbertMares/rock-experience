"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="text-light position-relative overflow-hidden d-flex align-items-end"
      style={{ minHeight: "100vh" }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      >
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* Overlay para contraste */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(0,0,0,0.4)" }}
      ></div>

      <Container className="position-relative pb-5">
        <Row>
          <Col md={8} lg={6}>
            <motion.h1
              className="fw-bold display-4 display-md-3 display-lg-2 mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Vive algo diferente.
            </motion.h1>

            <motion.p
              className="lead fs-5 fs-md-4 mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Descubre experiencias creadas para conectar marcas, tecnología y
              personas.
            </motion.p>

            <motion.div
              className="d-flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Button variant="light" size="lg" href="#experiencias">
                Explorar experiencias
              </Button>
              <Button variant="outline-light" size="lg" href="#contacto">
                Quiero participar
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
