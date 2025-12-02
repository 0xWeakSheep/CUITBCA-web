"use client";

import dynamic from "next/dynamic";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { AboutSection, MembersSection, ResourcesSection, SocialMediaSection } from "./LandingSections";

const CinematicCanvas = dynamic(() => import("./CinematicCanvas"), { ssr: false });

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  return (
    <div 
      className="relative min-h-screen overflow-hidden text-white font-sans selection:bg-[#38bdf8] selection:text-[#020617] group"
      onMouseMove={handleMouseMove}
    >
      <CinematicCanvas />
      
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.15), transparent 80%)`,
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <Image 
            src="/logo/logo-e9-93-be-e5-8d-8f-e6-97-a0-e5-ad-97-e7-89-88-pixian-ai.png"
            alt="CUITBCA Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8"
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

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div 
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-4xl space-y-8"
        >
          <motion.div variants={fadeIn} className="flex justify-center mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/logo/logo-e9-93-be-e5-8d-8f-e6-97-a0-e5-ad-97-e7-89-88-pixian-ai.png"
                alt="CUITBCA Logo"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                priority
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="inline-block px-4 py-1 mb-4 text-xs tracking-[0.2em] text-[#34d399] border border-[#34d399]/30 rounded-full bg-[#34d399]/10 backdrop-blur-sm">
            EST. 2020 // BLOCKCHAIN ASSOCIATION
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-bold tracking-tight leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              DECENTRALIZED
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-white to-[#34d399]">
              FUTURE
            </span>
          </motion.h1>

          <motion.p variants={fadeIn} className="max-w-2xl mx-auto text-lg text-white/60 tracking-wide leading-relaxed">
            We are architects of the new digital economy. Connecting visionaries, developers, and innovators to build the infrastructure of tomorrow.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <button className="group relative px-8 py-4 text-sm font-bold tracking-widest text-[#020617] bg-[#38bdf8] hover:bg-[#34d399] transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                JOIN US <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-8 py-4 text-sm font-bold tracking-widest text-white border border-white/20 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
              EXPLORE
            </button>
          </motion.div>
        </motion.div>
      </main>

      <AboutSection />
      <MembersSection />
      <ResourcesSection />
      <SocialMediaSection />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#020617]/80 backdrop-blur-xl py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#34d399]">CUITBCA</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Dedicated to promoting the learning and application of blockchain technology, building an open and inclusive student community.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 tracking-wider">QUICK LINKS</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#about" className="hover:text-[#38bdf8] transition-colors">About Us</a></li>
                <li><a href="#members" className="hover:text-[#38bdf8] transition-colors">Members</a></li>
                <li><a href="#resources" className="hover:text-[#38bdf8] transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 tracking-wider">SOCIAL</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 tracking-wider">CONTACT</h4>
              <p className="text-sm text-white/60 mb-2">📧 contact@cuitbca.com</p>
              <p className="text-sm text-white/60">📍 CUIT Campus</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center opacity-50 text-sm">
            <p>© 2025 CUIT BLOCKCHAIN ASSOCIATION. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

