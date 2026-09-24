"use client";

import { Card } from "react-bootstrap";

interface ExperienceProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function ExperienceCard({ title, description, image }: ExperienceProps) {
  return (
    <Card className="experience-card h-100 shadow-sm">
      <div className="experience-image-wrapper">
        <Card.Img
          variant="top"
          src={image || "https://picsum.photos/600/400?random=2"}
          alt={title}
          className="experience-image"
        />
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
