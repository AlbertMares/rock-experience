"use client";

import Image from "next/image";
import { Card } from "react-bootstrap";

interface ExperienceProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ExperienceCard({ title, category, description, image }: ExperienceProps) {
  return (
    <Card
      className="h-100 shadow-sm border-0 rounded-3 overflow-hidden experience-card"
      style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
    >
      <div className="position-relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="card-img-top"
        />
        <span
          className="badge bg-primary position-absolute top-0 start-0 m-2"
          style={{ fontSize: "0.8rem" }}
        >
          {category}
        </span>
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
