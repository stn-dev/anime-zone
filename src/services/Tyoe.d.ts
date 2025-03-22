export interface HeaderLinkType {
  label: string;
  href: string;
}

export interface CardProps {
  id: number;
  title: string;
  episode: number;
  imageSrc: string;
  genres: { name: string }[];
}

export interface SingleAnimePageInfos {
  label: string;
}
