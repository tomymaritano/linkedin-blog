import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Tomy Maritano",
  EMAIL: "tmaritanodev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "Bienvenido a mi blog de noticias / articulos.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Tratando de plasmar mis ideas creativas.",
};

export const WORK: Metadata = {
  TITLE: "Trabajos",
  DESCRIPTION: "Companias que confiaron en mi.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Coleccion de mis proyectos, prototipos y repositorios.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/tmaritanodev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/tomymaritano"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/tomymaritano",
  }
];
