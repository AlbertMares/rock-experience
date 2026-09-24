"use client";

import { Card } from "react-bootstrap";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ExperienceCard({ title, description, image }: ExperienceCardProps) {
  return (
    <Card className="experience-card h-100 shadow-lg rounded bg-dark text-light">
      <Card.Img
        variant="top"
        src={image || "https://picsum.photos/600/400?random=2"}
        alt={title}
        className="experience-image"
      />
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
