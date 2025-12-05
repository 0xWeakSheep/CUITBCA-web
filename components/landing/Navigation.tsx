"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/app/theme-provider";
import { useLanguage } from "@/i18n/language-provider";
import { MoonIcon, SunIcon, Languages } from "lucide-react";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md"
    >
      <div className="flex items-center gap-3">
        <Image
          src="/logo/logo.png"
          alt="CUITBCA Logo"
          width={32}
          height={32}
          className="w-8 h-8 bg-white rounded-full"
        />
        <span className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#34d399]">
          CUITBCA
        </span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest text-white/70">
        <a href="#" className="hover:text-[#38bdf8] transition-colors">
          {t("nav.home")}
        </a>
        <a href="#about" className="hover:text-[#38bdf8] transition-colors">
          {t("nav.about")}
        </a>
        <a href="#members" className="hover:text-[#38bdf8] transition-colors">
          {t("nav.members")}
        </a>
        <a href="#resources" className="hover:text-[#38bdf8] transition-colors">
          {t("nav.resources")}
        </a>
        <a href="#social" className="hover:text-[#38bdf8] transition-colors">
          {t("nav.contact")}
        </a>
      </div>
      <div className="flex items-center gap-2">
        {/* 语言切换 */}
        <button
          onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
          className="relative p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50"
          aria-label="切换语言"
        >
          <div className="flex items-center gap-1.5">
            <Languages className="w-5 h-5" />
            <AnimatePresence mode="wait">
              <motion.span
                key={locale}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="text-xs font-medium hidden sm:inline"
              >
                {locale === "zh" ? "ZH" : "EN"}
              </motion.span>
            </AnimatePresence>
          </div>
        </button>
        {/* 主题切换 */}
        <button
          onClick={toggleTheme}
          className="relative p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50"
          aria-label={
            isDark ? t("theme.switchToLight") : t("theme.switchToDark")
          }
        >
          <div className="relative w-5 h-5">
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <MoonIcon className="w-5 h-5 text-blue-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>
    </motion.nav>
  );
}
