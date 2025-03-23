export interface HeaderLinkType {
  label: string;
  href: string;
}

export interface CardProps {
  id: number;
  title: string;
  link: "anime" | "characters";
  episode: number;
  imageSrc: string;
  genres: { name: string }[];
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
