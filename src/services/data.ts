import { HeaderLinkType, SelectProps } from "./Type";

export const headerLinkData: HeaderLinkType[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Anime",
    href: "/anime",
  },
  {
    label: "Characters",
    href: "/characters",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const selectFilterData: SelectProps["options"] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Pokemon",
    value: "pokemon",
  },
  {
    label: "Dragon Ball",
    value: "dragon ball",
  },
  {
    label: "One piece",
    value: "one piece",
  },
  {
    label: "Naruto",
    value: "naruto",
  },
];

export const animeHeaderData: HeaderLinkType[] = [
  {
    label: "All",
    href: "",
  },
  {
    label: "Top",
    href: "top",
  },
  {
    label: "Current",
    href: "current",
  },
  {
    label: "Upcoming",
    href: "upcoming",
  },
  {
    label: "Recommendation",
    href: "recommendation",
  },
];

export const pokemonData = Array.from({ length: 6 }, () => "pokemon");
export const dbZnData = Array.from({ length: 5 }, () => "Dragon ball");
export const narutoData = Array.from({ length: 9 }, () => "Naruto");
export const onepieceData = Array.from({ length: 5 }, () => "one piece");
