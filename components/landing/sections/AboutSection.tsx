"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/i18n/language-provider";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t("about.title")} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">{t("about.mission.title")}</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                {t("about.mission.content")}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">{t("about.vision.title")}</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                {t("about.vision.content")}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">{t("about.values.title")}</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3 items-center">
                  <span>{t("about.values.openness")}</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span>{t("about.values.innovation")}</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span>{t("about.values.practicality")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#38bdf8]/10 border-l-4 border-[#38bdf8] p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-[#38bdf8] mb-2 uppercase tracking-wider">{t("about.stats.founded")}</h4>
              <p className="text-white text-xl">2022</p>
            </div>

            <div className="bg-[#34d399]/10 border-l-4 border-[#34d399] p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-[#34d399] mb-2 uppercase tracking-wider">{t("about.stats.members")}</h4>
              <p className="text-white text-xl">{t("about.stats.membersCount")}</p>
            </div>

            <div className="bg-purple-500/10 border-l-4 border-purple-500 p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-purple-400 mb-2 uppercase tracking-wider">{t("about.stats.activityFrequency")}</h4>
              <p className="text-white text-xl">{t("about.stats.activityDesc")}</p>
            </div>

            <div className="bg-white/5 border-l-4 border-white/40 p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-white/90 mb-2 uppercase tracking-wider">{t("about.stats.developmentDirection")}</h4>
              <p className="text-white text-xl">{t("about.stats.directionDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

