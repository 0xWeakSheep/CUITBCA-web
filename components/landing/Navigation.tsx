"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md"
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
        <a href="#" className="hover:text-[#38bdf8] transition-colors">HOME</a>
        <a href="#about" className="hover:text-[#38bdf8] transition-colors">ABOUT</a>
        <a href="#members" className="hover:text-[#38bdf8] transition-colors">MEMBERS</a>
        <a href="#resources" className="hover:text-[#38bdf8] transition-colors">RESOURCES</a>
        <a href="#social" className="hover:text-[#38bdf8] transition-colors">CONTACT</a>
      </div>
    </motion.nav>
  );
}

