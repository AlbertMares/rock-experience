"use client";

import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

// Definimos la forma de cada experiencia
interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Definimos los props que recibe el componente
interface ExperiencesSectionProps {
  experiences: Experience[];
  loading: boolean;
  error: string | null;
}

export default function ExperiencesSection({ experiences, loading, error }: ExperiencesSectionProps) {
  return (
    <section id="experiencias" className="py-5 bg-dark text-light" data-aos="fade-up">
      <Container>
        <h2 className="mb-4 fw-bold text-center">Experiencias</h2>
        {loading && <p>Cargando experiencias...</p>}
        {error && <p className="text-danger">{error}</p>}
        <Row>
          {experiences.map((exp) => (
            <Col md={4} key={exp.id} className="mb-4" data-aos="zoom-in">
              <ExperienceCard {...exp} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
