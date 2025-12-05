"use client";

import React from "react";
import { Github, Linkedin, Instagram, MessageCircle, Twitter } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/i18n/language-provider";

export function SocialMediaSection() {
  const { t } = useLanguage();
  
  const platforms = [
    {
      name: t("social.github.name"),
      icon: Github,
      url: "https://github.com",
      description: t("social.github.description"),
      color: "bg-[#24292e] hover:bg-[#2f363d]",
    },
    {
      name: t("social.xiaohongshu.name"),
      icon: MessageCircle,
      url: "https://xiaohongshu.com",
      description: t("social.xiaohongshu.description"),
      color: "bg-[#000000] hover:bg-[#111111]",
    },
    {
      name: t("social.twitter.name"),
      icon: Twitter,
      url: "https://twitter.com",
      description: t("social.twitter.description"),
      color: "bg-[#1da1f2] hover:bg-[#1e9bfc]",
    },
    {
      name: t("social.wechatOfficial.name"),
      icon: MessageCircle,
      url: "https://wechat.com",
      description: t("social.wechatOfficial.description"),
      color: "bg-[#07c160] hover:bg-[#08d169]",
    },
  ];

  return (
    <section id="social" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t("social.title")} subtitle={t("social.subtitle")} />

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
          <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{t("social.moreContact.title")}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-[#38bdf8]/10 rounded-lg text-[#38bdf8]">
                    <span className="text-2xl">📧</span>
                </div>
                <div>
                    <p className="text-white/50 text-sm mb-1 uppercase tracking-wider">{t("social.moreContact.email")}</p>
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
                    <p className="text-white/50 text-sm mb-1 uppercase tracking-wider">{t("social.moreContact.wechatOfficial")}</p>
                    <p className="text-white font-medium">CUITBCA - Link Chain</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

