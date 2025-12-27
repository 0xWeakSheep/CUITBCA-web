"use client";

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
              <div
                key={index}
                className="p-8 rounded-2xl bg-[#0f172a]/50 border border-white/5"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#38bdf8]/20 to-[#34d399]/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#38bdf8]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-white/60 leading-relaxed mb-6">
                  {item.description}
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-[#38bdf8] font-semibold text-sm">
                  {item.link}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

