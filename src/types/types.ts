import { ComicsProps } from "./comics";

export interface LogoProps {
  logo: string;
}

export interface NavItemProps {
  to: string;
  menuItem: string;
}

export interface ImageBannerProps {
  image: string;
  alt: string;
}

export interface ButtonComponentProps {
  variant?: string;
  text: string;
  handleClick: () => void;
}

export interface CharacterDetailComponentProps {
  name: string;
  image: string;
  description: string;
}

export interface PaginationProps {
  handleClick: (data: { selected: number }) => void;
  pageCount: number;
}

export type Status = "idle" | "loading" | "failed" | "succeced";
