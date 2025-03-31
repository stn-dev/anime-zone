import type { Anime, CharacterFull } from "@tutkli/jikan-ts";

export interface HeaderLinkType {
  label: string;
  href: string;
}

export interface CardProps {
  id: number;
  title: string;
  episode?: number;
  imageSrc: string;
  genres?: { name: string }[];
  isFullData: boolean;
}

export interface CardCharactersProps {
  id: string;
  name: string;
  japan_name: string;
  imageSrc: string;
}

export interface InputPros {
  type?: "text" | "checkbox" | "password";
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defautValue?: string;
}

export interface SelectProps {
  name: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string;
    label: string;
  }[];
}

export interface SingleAnimePageInfos {
  label: string;
}

export interface VideoProps {
  src: string;
  className?: string;
  title?: string;
}

interface PaginationProps {
  onClick: (é: React.MouseEvent<>) => void;
}

export interface AnimeWithType extends Anime {
  filterType: "anime";
}

export interface CharacterWithType extends CharacterFull {
  filterType: "character";
}
