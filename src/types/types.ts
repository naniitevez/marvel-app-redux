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

export type Status = 'idle' | 'loading' | 'failed' | 'succeced';