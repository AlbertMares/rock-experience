"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperiencesSection from "./components/ExperiencesSection";
import ContactSection from "./components/ContactSection";

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
      <Hero />
      <ExperiencesSection experiences={experiences} loading={loading} error={error} />
      <ContactSection />
    </>
  );
}
