export interface Tag {
  label: string;
  muted?: boolean;
}

export interface TimelineEntry {
  org: string;
  title: string;
  date: string;
  description?: string;
  subitems?: string[];
  tags?: Tag[];
  muted?: boolean;
}
