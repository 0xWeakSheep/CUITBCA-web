"use client";

import dynamic from "next/dynamic";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";
import { AboutSection, MembersSection, ResourcesSection, SocialMediaSection } from "@/components/landing/sections";

const CinematicCanvas = dynamic(() => import("@/components/landing/CinematicCanvas"), { ssr: false });

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

      <Navigation />
      <Hero />
      <AboutSection />
      <MembersSection />
      <ResourcesSection />
      <SocialMediaSection />
      <Footer />
    </div>
  );
}
