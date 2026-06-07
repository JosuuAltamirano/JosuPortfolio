export interface Project {
  title: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  featured?: string;
  full?: boolean;
}

export const projects: Project[] = [
  {
    title: "Odem Studio",
    description:
      "Agencia digital 360 que ayuda a negocios locales a crecer en internet. Servicios de diseño web, posicionamiento SEO, branding e identidad visual. Construida desde cero como proyecto personal y profesional.",
    tags: ["Diseño web", "SEO", "Branding", "HTML / CSS / JS", "Marketing digital"],
    links: [{ label: "[WEB DE ODEM STUDIO AQUÍ]", href: "#" }],
    featured: "Proyecto principal",
    full: true,
  },
];
