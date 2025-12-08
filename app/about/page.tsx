"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";

const team = [
  {
    name: "张三",
    role: "创始人 & CEO",
    bio: "拥有 15 年互联网行业经验，曾在多家知名科技公司担任技术负责人，致力于用技术改变世界。",
    image: "/picture/eric-stoynov-hsFMnOqdiTs-unsplash.jpg",
    skills: ["战略规划", "团队管理", "产品设计"],
  },
  {
    name: "李四",
    role: "设计总监",
    bio: "曾获得多项国际设计大奖，主张设计应服务于功能，追求极致的用户体验。",
    image: "/picture/eugene-golovesov-3wTDwR9fVio-unsplash.jpg",
    skills: ["UI/UX", "品牌设计", "交互动效"],
  },
  {
    name: "王五",
    role: "技术总监",
    bio: "全栈工程师，精通多种编程语言和架构模式，热衷于探索前沿技术。",
    image: "/picture/leo_visions-jgNBV1jsAS0-unsplash.jpg",
    skills: ["系统架构", "云原生", "AI 应用"],
  },
];

const timeline = [
  {
    year: "2015",
    title: "公司成立",
    description: "在深圳成立，专注于为中小企业提供数字化解决方案。初始团队仅有 3 人，在创客空间开始创业旅程。",
  },
  {
    year: "2017",
    title: "业务扩展",
    description: "客户数量突破 100 家，团队扩展至 20 人。开始涉足移动应用开发领域，并在行业内崭露头角。",
  },
  {
    year: "2019",
    title: "技术升级",
    description: "全面拥抱云原生架构，发布自主研发的低代码开发平台，大幅提升交付效率。",
  },
  {
    year: "2021",
    title: "A 轮融资",
    description: "获得知名 VC 数千万投资，加速产品研发和市场拓展。设立北京和上海分公司。",
  },
  {
    year: "2024",
    title: "全球化布局",
    description: "启动海外业务，服务范围覆盖东南亚及欧美市场，致力于成为全球领先的数字技术服务商。",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-[#38bdf8] selection:text-[#020617]">
      <Navigation />

      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Intro Section */}
          <section className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              关于我们
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 leading-relaxed"
            >
              我们需要建立信任感和人性化连接，通过展示公司文化和价值观，突出团队成员的专业性和个性，讲述品牌故事，建立情感联系。
            </motion.p>
          </section>

          {/* Team Section */}
          <section>
            <SectionHeader title="我们的团队" subtitle="汇聚行业精英，共创卓越价值" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#0f172a]/50 rounded-2xl border border-white/5 overflow-hidden hover:translate-y-[-8px] transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#38bdf8]/10 to-[#34d399]/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Social Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#020617] to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-4">
                      {[Linkedin, Twitter, Mail].map((Icon, i) => (
                        <a key={i} href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-[#38bdf8] text-white transition-colors backdrop-blur-sm">
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#38bdf8] font-medium mb-4">{member.role}</p>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/50 group-hover:bg-[#38bdf8]/10 group-hover:text-[#38bdf8] transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section>
            <SectionHeader title="我们的历程" subtitle="一步一个脚印，见证成长的力量" />

            <div className="relative">
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
                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                        <p className="text-white/60 leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}

