"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import ExperienceCard from "./components/ExperienceCard";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
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

      {/* Hero  */}
      <section
        id="inicio"
        className="text-light position-relative overflow-hidden d-flex align-items-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Video de fondo */}
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
          Tu navegador no soporta video en HTML5.
        </video>

        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.4)" }}
        ></div>

        {/* Contenido */}
        <Container className="position-relative text-center mt-n5" data-aos="fade-up">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <h1 className="fw-bold display-4 mb-3">Vive algo diferente.</h1>
              <p className="lead fs-5 mb-4">
                Descubre experiencias creadas para conectar marcas, tecnología y personas.
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

      {/* Sección de experiencias*/}
<section id="experiencias" className="py-5 bg-dark text-light" data-aos="fade-up">
  <Container>
    <h2 className="mb-4 fw-bold text-center">Experiencias</h2>
    {loading && <p>Cargando experiencias...</p>}
    {error && <p className="text-danger">{error}</p>}
    <Row>
      {experiences.map((exp) => (
        <Col md={4} key={exp.id} className="mb-4" data-aos="zoom-in">
          <div className="experience-card shadow-lg rounded">
            <img
              src={exp.image || "https://picsum.photos/600/400?random=2"}
              alt={exp.title}
              className="experience-image"
            />
            <div className="p-3">
              <h5 className="fw-bold">{exp.title}</h5>
              <p>{exp.description}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>


  {/* Contacto */}
<section id="contacto" className="py-5 bg-gradient text-light" data-aos="fade-left">
  <Container>
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <h2 className="mb-4 fw-bold text-center">Contacto</h2>
        <ContactForm />
      </Col>
    </Row>
  </Container>
</section>

    </>
  );
}
