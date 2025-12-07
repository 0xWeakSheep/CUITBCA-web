import type { ComponentType } from "react";

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
};

type IconProps = {
  size?: number;
  className?: string;
};

export type ResourceItem = {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
  url: string;
  gradient: string;
};

export type PlatformLink = {
  name: string;
  icon: ComponentType<IconProps>;
  url: string;
  description: string;
  color: string;
};
