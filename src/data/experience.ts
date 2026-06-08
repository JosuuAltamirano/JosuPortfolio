import type { TimelineEntry } from './types';

export const experience: TimelineEntry[] = [
  {
    org: "Proyecto propio",
    title: "Fundador — Odem Studio",
    date: "2026 — Actual",
    description:
      "Agencia digital 360 enfocada en negocios locales. Diseño web, branding, automatizaciones e implementación de IA.",
    tags: [
      { label: "Diseño web" },
      { label: "Branding" },
      { label: "Automatizaciones e IA" },
      { label: "Agencia 360" },
    ],
  },
  {
    org: "OMETASAT 32",
    title: "Desarrollador web (FCT)",
    date: "2026 · 1 mes",
    description:
      "Prácticas de FP. Desarrollo y mejora de páginas web con foco en optimización SEO.",
    tags: [{ label: "Desarrollo web" }, { label: "SEO" }],
  },
  {
    org: "Proyectos de construcción",
    title: "Electricista (voluntario)",
    date: "Mar — Abr 2026 · 1 mes",
    description:
      "Colaboración voluntaria en trabajos de instalación eléctrica en proyectos de construcción.",
    tags: [{ label: "Electricidad" }, { label: "Voluntario", muted: true }],
  },
  {
    org: "Proyectos de construcción",
    title: "Instalación de falso techo (voluntario)",
    date: "Ago 2025 · 1 mes",
    description: "Colaboración voluntaria en instalación de falsos techos en obras.",
    tags: [{ label: "Construcción" }, { label: "Voluntario", muted: true }],
  },
  {
    org: "Proyectos de construcción",
    title: "Asistente de electricista",
    date: "Mar — May 2025 · 3 meses",
    description: "Apoyo en instalaciones eléctricas residenciales y de obra.",
    tags: [{ label: "Electricidad" }, { label: "Instalaciones" }],
  },
  {
    org: "Autónomo",
    title: "Pintor principiante",
    date: "2025 — Actual · cada lunes",
    description:
      "Trabajos de pintura en viviendas de forma regular, compaginando con los estudios.",
    tags: [{ label: "Pintura" }, { label: "Reformas" }],
  },
  {
    org: "Proyectos de construcción",
    title: "Peón de obra",
    date: "Ago 2024 · 1 mes",
    description:
      "Apoyo general en obra: carga, descarga y labores de ayuda a los oficiales.",
    tags: [{ label: "Construcción", muted: true }],
    muted: true,
  },
];
