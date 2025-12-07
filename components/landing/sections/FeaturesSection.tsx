"use client";

import { motion } from "framer-motion";
import { Users, Zap, HeadphonesIcon, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { SectionHeader } from "@/components/ui/SectionHeader";

const icons = [Users, Zap, HeadphonesIcon];

export function FeaturesSection() {
  const { messages } = useLanguage();
  const features = messages.features;

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-[#020617]/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={features.title} />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-[#0f172a]/50 border border-white/5 hover:border-[#38bdf8]/30 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#38bdf8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Top Border Progress Effect */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#38bdf8] to-[#34d399] group-hover:w-full transition-all duration-500 ease-out" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#38bdf8]/20 to-[#34d399]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#38bdf8] group-hover:text-[#34d399] transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#38bdf8] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <a href="#" className="inline-flex items-center gap-2 text-[#38bdf8] font-semibold text-sm group/link">
                    {item.link}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

