"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
  const { messages } = useLanguage();
  const hero = messages.hero;

  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 md:pt-28 text-center">
      <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-4xl space-y-8">
        <motion.div variants={fadeIn} className="flex justify-center mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/logo/logo.png"
              alt="CUITBCA Logo"
              sizes="(min-width: 768px) 160px, 128px"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]"
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="inline-block px-4 py-1 mb-4 text-xs tracking-[0.2em] text-[#34d399] border border-[#34d399]/30 rounded-full bg-[#34d399]/10 backdrop-blur-sm"
        >
          {hero.tagline}
        </motion.div>

        <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-bold tracking-tight leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">{hero.titlePrimary}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-white to-[#34d399]">
            {hero.titleSecondary}
          </span>
        </motion.h1>

        <motion.p variants={fadeIn} className="max-w-2xl mx-auto text-lg text-white/60 tracking-wide leading-relaxed">
          {hero.description}
        </motion.p>

        <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
          <button className="group relative px-8 py-4 text-sm font-bold tracking-widest text-[#020617] bg-[#38bdf8] hover:bg-[#34d399] transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              {hero.ctaJoin}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="px-8 py-4 text-sm font-bold tracking-widest text-white border border-white/20 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
            {hero.ctaExplore}
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
