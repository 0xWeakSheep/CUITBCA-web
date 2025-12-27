export type NavLink = {
  label: string;
  href: string;
};

export type MemberProfile = {
  name: string;
  role: string;
  bio: string;
  contact: string;
  color: string;
  noiseBackground?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  skills?: string[];
};

export type ResourceItem = {
  title: string;
  description: string;
  url: string;
  gradient: string;
};

export type PlatformLink = {
  name: string;
  url: string;
  description: string;
  color: string;
};
