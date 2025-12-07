"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { NavLink } from "@/types";

const links: NavLink[] = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#about" },
  { label: "MEMBERS", href: "#members" },
  { label: "RESOURCES", href: "#resources" },
  { label: "CONTACT", href: "#social" },
];

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md"
    >
      <div className="flex items-center gap-3">
        <Image src="/logo/logo.png" alt="CUITBCA Logo" width={32} height={32} className="w-8 h-8" />
        <span className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#34d399]">
          CUITBCA
        </span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest text-white/70">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-[#38bdf8] transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
