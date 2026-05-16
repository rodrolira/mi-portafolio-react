import atklPreview from "../assets/projects/atkl-preview.webp";
import remoteWorkCertification from "../assets/certifications/certificado-remote-work.pdf";
import diseñoWeb from "../assets/certifications/certificado-diseño-programacion-web.pdf";

export const personalData = {
  name: "Rodrigo Lira Pizarro",
  title: "Desarrollador Full Stack | Apasionado por la tecnología",
  email: "rlirapizarro@gmail.com",
  phone: "+56 9 9297 0804",
  location: "Rancagua, Chile",
  github: "https://github.com/rodrolira",
  about: `Soy desarrollador de software autodidacta, con experiencia creando aplicaciones web modernas, APIs y proyectos full stack. He trabajado principalmente con tecnologías como React, TypeScript, Node.js, Express, PostgreSQL, Java Spring, Angular y Vite, enfocándome en construir aplicaciones funcionales, escalables y con interfaces limpias y responsivas.
    <br /><br />
    Me interesa especialmente el desarrollo frontend, la experiencia de usuario y la arquitectura de proyectos, aunque también disfruto trabajar en backend, bases de datos y despliegues en la nube.
    <br /><br />
    Actualmente estoy enfocado en seguir creciendo como desarrollador, creando proyectos que combinen diseño, rendimiento y buenas prácticas de programación, mientras continúo aprendiendo nuevas tecnologías y mejorando mis habilidades en desarrollo web y software.`,

  skills: {
    frontend: [
      { name: "HTML5", level: 100 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 70 },
      { name: "Material UI", level: 70 },
      { name: "Angular", level: 60 },
      { name: "Ruby on Rails", level: 60 },
    ],
    backend: [
      { name: "Python", level: 40 },
      { name: "Node.js", level: 70 },
      { name: "Ruby on Rails", level: 60 },
    ],
    databases: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "Git/GitHub", level: 80 },
      { name: "PostgreSQL", level: 90 },
    ],
  },

  projects: [
    {
      title: "ATKL Records - Plataforma para Sello Discográfico",
      description:
        "Aplicación full-stack para la gestión y promoción de un sello de techno. Incluye catálogo de lanzamientos, sistema de maquetas (demos) para artistas, reproducción de audio y panel administrativo.",
      tags: ["TypeScript", "React", "Node.js", "Vercel"], // ← Solo lo seguro
      link: "https://atkl.vercel.app",
      github: "https://github.com/rodrolira/atkl",
      image: atklPreview,
    },
  ],

  experience: [
    {
      title: "Sin Experiencia Profesional",
    },
  ],

  education: [
    {
      degree: "Ingeniería en Informática",
      institution: "IPLACEX",
      date: "2026 - Actualidad",
    },
  ],

  languages: ["Español (Nativo)", "Inglés (B2 - Intermedio)"],
  certifications: [{
    name: "Remote Work Professional Certification RWPC - CertiProf",
    institution: "CertiProf",
    date: "2026",
    image: remoteWorkCertification,
    type: "pdf"
  },
],
};
