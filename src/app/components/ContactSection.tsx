"use client";

import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-5 bg-gradient text-light" data-aos="fade-left">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}> 
            <h2 className="mb-4 fw-bold text-center">Contacto</h2>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
