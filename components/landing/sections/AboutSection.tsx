"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/i18n/language-provider";

const highlightStyles = [
  { border: "border-white/20", bg: "bg-white/5", text: "text-white/80" },
  { border: "border-white/20", bg: "bg-white/5", text: "text-white/80" },
  { border: "border-white/20", bg: "bg-white/5", text: "text-white/80" },
  { border: "border-white/20", bg: "bg-white/5", text: "text-white/80" },
];

export function AboutSection() {
  const { messages } = useLanguage();
  const about = messages.about;

  return (
    <section id="about" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={about.title} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">{about.missionTitle}</h3>
              <p className="text-white/70 leading-relaxed text-lg">{about.missionDescription}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">{about.visionTitle}</h3>
              <p className="text-white/70 leading-relaxed text-lg">{about.visionDescription}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">{about.valuesTitle}</h3>
              <ul className="space-y-3 text-white/70">
                {about.values.map((value) => (
                  <li key={value} className="flex gap-3 items-center">
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {about.highlights.map((highlight, index) => {
              const style = highlightStyles[index] ?? highlightStyles[highlightStyles.length - 1];
              return (
                <div
                  key={highlight.title}
                  className={`${style.bg} border-l-4 ${style.border} p-6 rounded-r-lg backdrop-blur-sm`}
                >
                  <h4 className={`font-bold ${style.text} mb-2 uppercase tracking-wider`}>{highlight.title}</h4>
                  <p className="text-white text-xl">{highlight.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
