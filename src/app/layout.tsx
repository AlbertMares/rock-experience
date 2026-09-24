import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "aos/dist/aos.css";


// Configuración de fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// SEO Y METADATA
export const metadata: Metadata = {
  metadataBase: new URL("https://rock-experience-final.vercel.app"), 

  title: "ROCK EXPERIENCE",
  description:
    "Descubre experiencias creadas para conectar marcas, tecnología y personas.",

  openGraph: {
    title: "ROCK EXPERIENCE",
    description: "Vive algo diferente.",
    url: "https://rock-experience-final.vercel.app", 
    siteName: "ROCK EXPERIENCE",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rock Experience Hero",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
