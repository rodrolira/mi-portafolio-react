import atklPreview from '../assets/projects/atkl-preview.webp'

export const personalData = {
    name: "Rodrigo Lira Pizarro",
    title: "Desarrollador Full Stack | Apasionado por la tecnología",
    email: "rlirapizarro@gmail.com",
    phone: "+56 9 9297 0804",
    location: "Madrid, España",
    github: "https://github.com/rodrolira",
    about: "Desarrollador apasionado con 3 años de experiencia en creación de aplicaciones web. Me encanta aprender nuevas tecnologías y resolver problemas complejos. Busco oportunidades para crecer profesionalmente y aportar valor a proyectos innovadores.",
    
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
        { name: "Python", level: 85 },
        { name: "Node.js", level: 70 },
        { name: "Ruby on Rails", level: 60 },
      ],
      databases: [
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Git/GitHub", level: 80 },
        { name: "PostgreSQL", level: 70 },
      ]
    },
    
    projects: [
      {
        title: "ATKL Records - Plataforma para Sello Discográfico",
        description: "Aplicación full-stack para la gestión y promoción de un sello de techno. Incluye catálogo de lanzamientos, sistema de maquetas (demos) para artistas, reproducción de audio y panel administrativo.",
        tags: ["TypeScript", "React", "Node.js", "Vercel"],  // ← Solo lo seguro
        link: "https://atkl.vercel.app",
        github: "https://github.com/rodrolira/atkl",
        image: atklPreview
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
        date: "2026 - Actualidad"
      },
      
    ],
    
    languages: ["Español (Nativo)", "Inglés (B2 - Intermedio)"],
    certifications: ["Remote Work Professional Certification RWPC - CertiProf", "Scrum Master Certification - Scrum Alliance"]
  }