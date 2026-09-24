"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperienceCard from "./components/ExperienceCard";
import ContactForm from "./components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/experiences.json")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar experiencias");
        return res.json();
      })
      .then((data) => setExperiences(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <Hero />

      {/* Sección de experiencias */}
      <section id="experiencias" className="py-5">
        <Container>
          <h2 className="mb-4">Experiencias</h2>
          {loading && <p>Cargando experiencias...</p>}
          {error && <p className="text-danger">{error}</p>}
          <Row>
            {experiences.map((exp) => (
              <Col md={4} key={exp.id} className="mb-4">
                <ExperienceCard {...exp} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Formulario de contacto */}
      <ContactForm />
    </>
  );
}
