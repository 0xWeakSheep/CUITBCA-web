"use client";

import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/language-provider";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="text-4xl md:text-6xl font-bold text-white tracking-tight" />;
}

export function StatsSection() {
  const { messages } = useLanguage();
  const stats = messages.stats;

  const statItems = [
    { label: stats.projects, value: 500 },
    { label: stats.clients, value: 200 },
    { label: stats.satisfaction, value: 98, suffix: "%" },
    { label: stats.awards, value: 15 },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/10 via-[#34d399]/10 to-[#38bdf8]/10 opacity-30 blur-3xl" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", 
             backgroundSize: "40px 40px" 
           }} 
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="mb-2 text-[#38bdf8]">
                <Counter value={item.value} suffix={item.suffix} />
              </div>
              <p className="text-sm md:text-base font-medium text-white/70 uppercase tracking-wider">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

