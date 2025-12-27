"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/i18n/language-provider";

export function TimelineSection() {
  const { language } = useLanguage();
  
  // Hardcoded timeline for now, matching the association history
  const timeline = [
    {
      year: "2020",
      title: "区块链产业学院成立",
      titleEn: "学院成立",
      description: "第一批区块链产业学院学生入学，国内第一批区块链专业学生",
      descriptionEn: "The first batch of blockchain industry academy students enrolled, the first batch of blockchain professional students in China."
    },
    {
      year: "2022",
      title: "协会成立",
      titleEn: "Association Founded",
      description: "CUITBCA 在成都信息工程大学区块链产业学院正式成立，由一群热衷于区块链技术的学生共同发起。",
      descriptionEn: "CUITBCA was officially founded at Chengdu University of Information Technology by a group of students passionate about blockchain technology."
    },
    {
      year: "2023",
      title: "多方向发展",
      titleEn: "Multi-Direction Development",
      description: "建设投研、开发、多方向发展，与企业合作，提供实习机会",
      descriptionEn: "Building research, development, and multi-direction development, cooperating with enterprises, providing internship opportunities."
    },
    {
      year: "2024",
      title: "成员开始涉足各类defi项目",
      titleEn: "Members Start to Involve in Various DeFi Projects",
      description: "第一批区块链产业学院学生毕业，接触各类defi",
      descriptionEn: "The first batch of blockchain industry academy students graduated, involved in various DeFi projects."
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
            <SectionHeader title="发展历程" subtitle="Our Journey" />
            
            <div className="relative mt-20">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#38bdf8] via-[#34d399] to-transparent md:-translate-x-1/2 opacity-30" />

              <div className="space-y-12 md:space-y-24">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row items-start ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Marker */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-[calc(50%-1px)] md:-translate-x-1/2 w-4 h-4 bg-[#020617] border-2 border-[#38bdf8] rounded-full z-10 mt-1.5 shadow-[0_0_0_4px_rgba(56,189,248,0.2)]">
                      <div className="absolute inset-0 bg-[#38bdf8] rounded-full animate-ping opacity-20" />
                    </div>

                    {/* Content */}
                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-12 text-left">
                      <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end md:text-right"}`}>
                        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#34d399] text-[#020617] text-sm font-bold shadow-lg shadow-[#38bdf8]/20">
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-bold mb-2">{language === 'en' ? item.titleEn : item.title}</h3>
                        <p className="text-white/60 leading-relaxed max-w-md">
                           {language === 'en' ? item.descriptionEn : item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
        </div>
    </section>
  );
}

