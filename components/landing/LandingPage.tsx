"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

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
  return (
    <div className="relative min-h-screen overflow-hidden text-white font-sans selection:bg-[#38bdf8] selection:text-[#020617]">
      <CinematicCanvas />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md"
      >
        <div className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#34d399]">
          CUITBCA
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest text-white/70">
          <a href="#" className="hover:text-[#38bdf8] transition-colors">MISSION</a>
          <a href="#" className="hover:text-[#38bdf8] transition-colors">MEMBERS</a>
          <a href="#" className="hover:text-[#38bdf8] transition-colors">EVENTS</a>
          <a href="#" className="hover:text-[#38bdf8] transition-colors">CONTACT</a>
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
          <motion.div variants={fadeIn} className="inline-block px-4 py-1 mb-4 text-xs tracking-[0.2em] text-[#34d399] border border-[#34d399]/30 rounded-full bg-[#34d399]/10 backdrop-blur-sm">
            EST. 2024 // BLOCKCHAIN ASSOCIATION
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

      {/* Features Section */}
      <section className="relative z-10 py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="GLOBAL NETWORK"
            desc="Connecting nodes across the world for a unified decentralized vision."
            icon={<Globe className="w-6 h-6 text-[#38bdf8]" />}
            image="/picture/eric-stoynov-hsFMnOqdiTs-unsplash.jpg"
          />
          <FeatureCard 
            title="SECURE INFRA"
            desc="Building resilient systems with state-of-the-art cryptographic security."
            icon={<Shield className="w-6 h-6 text-[#34d399]" />}
            image="/picture/leo_visions-jgNBV1jsAS0-unsplash.jpg"
          />
          <FeatureCard 
            title="FAST EXECUTION"
            desc="High-performance consensus mechanisms for real-time applications."
            icon={<Zap className="w-6 h-6 text-purple-400" />}
            image="/picture/tanya-barrow-y4CBx5GOlEM-unsplash.jpg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#020617]/80 backdrop-blur-xl py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center opacity-50 text-sm text-center md:text-left">
          <p>© 2024 CUIT BLOCKCHAIN ASSOCIATION</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc, icon, image }: { title: string; desc: string; icon: React.ReactNode; image: string }) {
  return (
    <div className="group relative h-[400px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-[#38bdf8]/50 hover:scale-[1.02] rounded-lg">
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <div className="mb-4 p-3 w-fit rounded-full bg-white/10 backdrop-blur-md border border-white/10">
          {icon}
        </div>
        <h3 className="text-xl font-bold tracking-widest mb-2 text-white">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

