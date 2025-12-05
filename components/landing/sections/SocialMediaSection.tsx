"use client";

import React from "react";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SocialMediaSection() {
  const platforms = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      description: "View our code repositories and projects",
      color: "bg-[#24292e] hover:bg-[#2f363d]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      description: "Career development and industry information",
      color: "bg-[#0077b5] hover:bg-[#008ec4]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      description: "Follow our activities and updates",
      color: "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90",
    },
    {
      name: "WeChat",
      icon: MessageCircle,
      url: "#wechat",
      description: "Join our WeChat Official Account",
      color: "bg-[#07c160] hover:bg-[#08d169]",
    },
  ];

  return (
    <section id="social" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Social Media" subtitle="Follow us on major platforms for the latest updates" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${platform.color} rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center gap-6 text-white`}
              >
                <div className="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{platform.description}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">More Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-[#38bdf8]/10 rounded-lg text-[#38bdf8]">
                    <span className="text-2xl">📧</span>
                </div>
                <div>
                    <p className="text-white/50 text-sm mb-1 uppercase tracking-wider">Email</p>
                    <a href="mailto:contact@example.com" className="text-white hover:text-[#38bdf8] font-medium transition-colors">
                        contact@example.com
                    </a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="p-3 bg-[#34d399]/10 rounded-lg text-[#34d399]">
                    <span className="text-2xl">📱</span>
                </div>
                <div>
                    <p className="text-white/50 text-sm mb-1 uppercase tracking-wider">WeChat Official</p>
                    <p className="text-white font-medium">CUITBCA - Link Chain</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

