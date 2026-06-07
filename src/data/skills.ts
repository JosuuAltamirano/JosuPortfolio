export type SkillIcon =
  | "code"
  | "seo"
  | "design"
  | "marketing"
  | "electric"
  | "dam";

export interface Skill {
  name: string;
  level: string;
  percent: number;
  icon: SkillIcon;
}

export const skills: Skill[] = [
  { name: "HTML / CSS / JS", level: "Intermedio", percent: 55, icon: "code" },
  { name: "SEO & Posicionamiento", level: "Intermedio", percent: 45, icon: "seo" },
  { name: "Diseño web", level: "Intermedio", percent: 50, icon: "design" },
  { name: "Marketing digital", level: "Básico-medio", percent: 40, icon: "marketing" },
  { name: "Electricidad & Obra", level: "Intermedio", percent: 60, icon: "electric" },
  { name: "DAM (en curso)", level: "Aprendiendo", percent: 30, icon: "dam" },
];
