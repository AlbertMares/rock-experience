This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Tecnologias Utilizadas:
#Next.js (App Router)

React

Bootstrap / React-Bootstrap

AOS (animaciones al hacer scroll)

Tipografía: Geist (Google Fonts)

JSON local para simular datos dinámicos

# Estructura General
src/
 └─ app/
    ├─ components/
    │   ├─ Header.tsx
    │   ├─ Hero.tsx
    │   ├─ ExperiencesSection.tsx
    │   ├─ ExperienceCard.tsx
    │   ├─ ContactSection.tsx
    │   └─ ContactForm.tsx
    ├─ layout.tsx
    ├─ page.tsx
    └─ globals.css
public/
 ├─ experiences.json
 ├─ hero.jpg
 └─ videos/
     ├─ hero.webm
     └─ hero.mp4


# Decisiones Técnicas Relevantes
Se utilizó Next.js App Router para optimización nativa y SEO.

Bootstrap para grill responsiva rápida y componentes accesibles.

Videos en formato WebM para mejor optimización sin perder cálidad y de reserva mp4 optimizado por si no se puede cargar el primero

Datos dinámicos cargados desde public/experiences.json para simular consumo de API.

Formulario de contacto con validaciones y casilla de términos y condiciones, se desactiva el boton de enviar y se oculta el formulario para evitar multiples envios

Animaciones AOS para dar dinamismo a las secciones.

Responsive design probado en mobile, tablet y desktop.

# Mejoras Futuras
Conectar a un backend el formulario, incluya log, correo de confirmación de datos tanto para la empresa como para la persona interesada con más información, etc,
Al igual que protección para evitar spam, como bloqueo de ip si envia cierta cantidad en un cierto tiempo, que no se pueda enviar el formulario al instante de otra solicitud,etc
Añadir animaciónes, videos, campañas realizadas o marcas con las que actualmente se trabajan
Incluir telefonos, redes sociales, mapa

# Herramientas de IA utilizadas
Microsoft Copilot
 -Utilizado para la guía inicial sobre la estructura del proyecto.
 -Instalar librerias con npm 
 -Guia para publicar la aplicación
 -Optimización de código

 


