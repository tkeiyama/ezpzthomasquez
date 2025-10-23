export interface Frontmatter {
  title: string;
  description: string;
  date: string;
}

export interface Metadata extends Frontmatter {
  id: string;
}

export interface Article extends Metadata {
  content: string;
}
