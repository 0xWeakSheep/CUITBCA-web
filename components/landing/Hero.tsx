"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/language-provider";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Hero() {
  const { t } = useLanguage();

  //点击箭头向下滑动到AboutSection
  const handleArrowClick = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center select-none">
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="max-w-8xl space-y-8"
      >
        <motion.div variants={fadeIn} className="flex justify-center mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full">
            <Image
              src="/logo/logo.png"
              alt="CUITBCA Logo"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="inline-block px-4 py-1 mb-4 text-sm tracking-[0.2em] text-[#34d399] border border-[#34d399]/30 rounded-full bg-[#34d399]/10 backdrop-blur-sm"
        >
          {t("hero.tagline")}
        </motion.div>
        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-8xl font-bold tracking-tight leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-white to-[#34d399] whitespace-nowrap ">
            {t("hero.title")}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="max-w-2xl mx-auto text-lg text-white/60 tracking-wide leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>
        {/* 箭头具有动画效果 */}
        <motion.div className="flex justify-center pt-8">
          <div className="group relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-60 group-hover:opacity-90 transition-all duration-500"></div>
            <ArrowDown
              onClick={handleArrowClick}
              className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-all duration-300 animate-bounce"
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
