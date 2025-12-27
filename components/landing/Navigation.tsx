"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLanguage } from "@/i18n/language-provider";
import type { Messages } from "@/i18n/config";
import { useState } from "react";

const navTargets = [
  { key: "home", href: "/" },
  { key: "blog", href: "/blog" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const satisfies Array<{ key: keyof Messages["navigation"]; href: string }>;

export function Navigation() {
  const { language, setLanguage, messages } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const localizedLinks = navTargets.map(({ key, href }) => ({
    href,
    label: messages.navigation[key],
  }));

  function toggleLanguage() {
    setLanguage(language === "zh" ? "en" : "zh");
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        backgroundColor: isScrolled ? "rgba(2, 6, 23, 0.8)" : "rgba(2, 6, 23, 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: isScrolled ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0)",
        paddingTop: isScrolled ? "1rem" : "1.5rem",
        paddingBottom: isScrolled ? "1rem" : "1.5rem",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 border-b"
    >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo/logo.png"
          alt="CUITBCA Logo"
          width={32}
          height={32}
          className="w-8 h-8"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <span className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#34d399]">
          CUITBCA
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-widest text-white/70">
        {localizedLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-[#38bdf8] transition-colors">
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={toggleLanguage}
          className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-[0.3em] hover:border-[#38bdf8]/60 hover:text-white transition-colors"
        >
          {language === "zh" ? "EN" : "中文"}
        </button>
      </div>
    </motion.nav>
  );
}
