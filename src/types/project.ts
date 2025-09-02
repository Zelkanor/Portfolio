export interface ProjectTag {
  id: number;
  name: string;
  path: string;
}

export interface Project {
  title: string;
  desc: string;
  subdesc: string;
  href: string;
  texture: string;
  logo: string;
  logoStyle: Record<string, string | undefined>;
  spotlight: string;
  tags: ProjectTag[];
}

export type ProjectViewType = "featured" | "gallery";
