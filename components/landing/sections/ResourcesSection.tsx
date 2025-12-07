"use client";

import React from "react";
import { ArrowRight, Code, FileText, BookOpen, Download } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/i18n/language-provider";

export function ResourcesSection() {
  const { t } = useLanguage();
  
  const resources = [
    {
      title: t("resources.github.title"),
      description: t("resources.github.description"),
      icon: Code,
      url: "https://github.com",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      title: t("resources.reports.title"),
      description: t("resources.reports.description"),
      icon: FileText,
      url: "#research",
      gradient: "from-blue-600 to-blue-900",
    },
    {
      title: t("resources.materials.title"),
      description: t("resources.materials.description"),
      icon: BookOpen,
      url: "#materials",
      gradient: "from-purple-600 to-purple-900",
    },
    {
      title: t("resources.downloads.title"),
      description: t("resources.downloads.description"),
      icon: Download,
      url: "#downloads",
      gradient: "from-emerald-600 to-emerald-900",
    },
  ];

  return (
    <section id="resources" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t("resources.title")} subtitle={t("resources.subtitle")} />

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={index}
                href={resource.url}
                target={resource.url.startsWith("http") ? "_blank" : undefined}
                rel={resource.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative p-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{resource.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-8 flex-grow">{resource.description}</p>
                  
                  <div className="flex items-center gap-3 text-white/70 group-hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
                    <span>{t("resources.learnMore")}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Featured Resources */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#38bdf8] pl-4">{t("resources.featured.title")}</h3>
          <div className="space-y-4">
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">{t("resources.featured.fundamentals.title")}</h4>
              <p className="text-white/60">{t("resources.featured.fundamentals.description")}</p>
            </Card>
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">{t("resources.featured.solidity.title")}</h4>
              <p className="text-white/60">{t("resources.featured.solidity.description")}</p>
            </Card>
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">{t("resources.featured.defi.title")}</h4>
              <p className="text-white/60">{t("resources.featured.defi.description")}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

