export type NavLink = {
  label: string;
  href: string;
};

export type MemberProfile = {
  id?: string | number; // 唯一标识符
  name?: string;
  role?: string;
  bio?: string;
  contact?: string;
  email?: string;
  avatar?: string; // 头像图片URL
  color?: string; // 渐变背景颜色（如果没有avatar时使用）
  noiseBackground?: string;
  linkedin?: string;
  twitter?: string;
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
