"use client";

import { BookOpen, Code, Download, FileText } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import type { ResourceItem } from "@/types";
import { useLanguage } from "@/i18n/language-provider";

const resourceIcons = [Code, FileText, BookOpen, Download];

export function ResourcesSection() {
  const { messages } = useLanguage();
  const resourceContent = messages.resources;
  const resources = resourceContent.list as ResourceItem[];

  return (
    <section id="resources" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={resourceContent.title} subtitle={resourceContent.subtitle} />

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => {
            const Icon = resourceIcons[index] ?? resourceIcons[0];
            const openInNewTab = resource.url.startsWith("http");
            return (
              <a
                key={resource.title}
                href={resource.url}
                target={openInNewTab ? "_blank" : undefined}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative p-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{resource.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-8 flex-grow">{resource.description}</p>

                  <div className="text-white/70 group-hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
                    {resourceContent.learnMore}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#38bdf8] pl-4">{resourceContent.featuredTitle}</h3>
          <div className="space-y-4">
            {resourceContent.featured.map((item) => (
              <Card key={item.title} className="group cursor-pointer hover:bg-white/10">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">{item.title}</h4>
                <p className="text-white/60">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
