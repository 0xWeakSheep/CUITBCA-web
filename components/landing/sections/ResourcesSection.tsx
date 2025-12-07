"use client";

import { ArrowRight, BookOpen, Code, Download, FileText } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import type { ResourceItem } from "@/types";

const resources: ResourceItem[] = [
  {
    title: "GitHub Repository",
    description: "Visit our GitHub account to access the latest project code, tutorials, and examples",
    icon: Code,
    url: "https://github.com",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    title: "Blockchain Research Reports",
    description:
      "In-depth analysis reports and industry research to understand the latest technological trends and market dynamics",
    icon: FileText,
    url: "#research",
    gradient: "from-blue-600 to-blue-900",
  },
  {
    title: "Learning Materials",
    description:
      "Curated tutorials, documentation, and best practice guides to help you get started quickly",
    icon: BookOpen,
    url: "#materials",
    gradient: "from-purple-600 to-purple-900",
  },
  {
    title: "Download Center",
    description: "Access meeting materials, presentations, tools, and other related files",
    icon: Download,
    url: "#downloads",
    gradient: "from-emerald-600 to-emerald-900",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Learning Resources"
          subtitle="Integrating the highest quality learning resources to support your growth journey"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource) => {
            const Icon = resource.icon;
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

                  <div className="flex items-center gap-3 text-white/70 group-hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#38bdf8] pl-4">Featured Resources</h3>
          <div className="space-y-4">
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
                📚 Blockchain Fundamentals Tutorial Series
              </h4>
              <p className="text-white/60">
                Learn blockchain technology from scratch, including cryptography, consensus algorithms, smart contracts, and other core content
              </p>
            </Card>
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
                💻 Solidity Development Beginner&apos;s Guide
              </h4>
              <p className="text-white/60">
                Master smart contract development skills, including project practice and common security issues
              </p>
            </Card>
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
                🔗 DeFi Application Case Analysis
              </h4>
              <p className="text-white/60">
                Deeply understand decentralized finance applications and learn the operational mechanisms of cutting-edge market projects
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
