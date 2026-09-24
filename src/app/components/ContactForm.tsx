"use client";

import { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    privacy: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    if (form.name.length < 2) return "Nombre inválido";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Correo inválido";
    if (!/^[0-9+\- ]{7,15}$/.test(form.phone)) return "Teléfono inválido";
    if (!form.message) return "Mensaje requerido";
    if (!form.privacy) return "Debes aceptar el aviso de privacidad";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) setError(err);
    else {
      setError("");
      setSuccess("Gracias. recibimos tus datos correctamente.");
    }
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="mb-4 text-center">Quiero participar</h2>
        <Form
          onSubmit={handleSubmit}
          className="p-4 rounded bg-light text-dark shadow"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control name="name" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control name="phone" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Empresa</Form.Label>
            <Form.Control name="company" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" onChange={handleChange} required />
          </Form.Group>
          <Form.Check
            type="checkbox"
            label="Acepto el aviso de privacidad"
            name="privacy"
            onChange={handleChange}
            required
            className="mb-3"
          />
          <Button type="submit" variant="primary" className="w-100">
            Enviar
          </Button>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          {success && <Alert variant="success" className="mt-3">{success}</Alert>}
        </Form>
      </Container>
    </section>
  );
}
