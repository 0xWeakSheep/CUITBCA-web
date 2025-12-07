"use client";

import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PlatformLink } from "@/types";
import { useLanguage } from "@/i18n/language-provider";

const platformIcons = [Github, Linkedin, Instagram, MessageCircle];

export function SocialMediaSection() {
  const { messages } = useLanguage();
  const social = messages.social;
  const platforms = social.list as PlatformLink[];

  return (
    <section id="social" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={social.title} subtitle={social.subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platformIcons[index] ?? platformIcons[0];
            return (
              <a
                key={platform.name}
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
          <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{social.contactTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#38bdf8]/10 rounded-lg text-[#38bdf8]">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <p className="text-white/50 text-sm mb-1 uppercase tracking-wider">{social.emailLabel}</p>
                <a href={`mailto:${social.emailValue}`} className="text-white hover:text-[#38bdf8] font-medium transition-colors">
                  {social.emailValue}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#34d399]/10 rounded-lg text-[#34d399]">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <p className="text-white/50 text-sm mb-1 uppercase tracking-wider">{social.wechatLabel}</p>
                <p className="text-white font-medium">{social.wechatValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
