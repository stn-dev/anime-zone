import { InputHTMLAttributes } from "react";

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

export interface InputPros extends InputHTMLAttributes {
  type?: "text" | "checkbox" | "password";
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defautValue?: string;
}

export interface SingleAnimePageInfos {
  label: string;
}
