export interface HeaderLinkType {
  label: string;
  href: string;
}

export interface CardProps {
  id: number;
  title: string;
  rating: number | string;
  date: number;
  imageSrc: string;
  synopsis?: string;
}
