export interface LogoProps {
  logo: string;
}

export interface NavItemProps {
  to: string;
  menuItem: string;
}

export type Status = 'idle' | 'loading' | 'failed' | 'succeced';