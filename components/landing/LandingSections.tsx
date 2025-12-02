"use client";

import React from "react";
import { 
  Globe, Shield, Zap, ArrowRight, 
  Code, FileText, BookOpen, Download, 
  Github, Linkedin, Instagram, MessageCircle, 
  Menu, X 
} from "lucide-react";
import Image from "next/image";

// Shared Components
const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-white/60 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className="w-20 h-1 bg-[#38bdf8] mx-auto rounded-full mt-6" />
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-300 hover:border-[#38bdf8]/50 hover:bg-white/10 ${className}`}>
    {children}
  </div>
);

// About Section
export function AboutSection() {
  return (
    <section id="about" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="关于链协" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">我们的使命</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                链协致力于推动校园内区块链技术的理解和应用，为学生提供学习、交流和实践的平台。我们相信区块链技术将改变未来。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">我们的愿景</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                建立一个开放、包容、创新的学习社区，帮助学生掌握区块链技术，为行业输送优秀人才。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">我们的价值观</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3 items-center">
                  <span className="text-[#34d399] font-bold text-xl"></span>
                  <span>开放性 - 欢迎所有对区块链感兴趣的学生</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-[#34d399] font-bold text-xl"></span>
                  <span>创新性 - 不断探索新的学习方式</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-[#34d399] font-bold text-xl"></span>
                  <span>实用性 - 将理论与实践相结合</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#38bdf8]/10 border-l-4 border-[#38bdf8] p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-[#38bdf8] mb-2 uppercase tracking-wider">成立时间</h4>
              <p className="text-white text-xl">2020年</p>
            </div>

            <div className="bg-[#34d399]/10 border-l-4 border-[#34d399] p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-[#34d399] mb-2 uppercase tracking-wider">会员数量</h4>
              <p className="text-white text-xl">500+ 活跃成员</p>
            </div>

            <div className="bg-purple-500/10 border-l-4 border-purple-500 p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-purple-400 mb-2 uppercase tracking-wider">活动频率</h4>
              <p className="text-white text-xl">每周举办线上分享和实践活动</p>
            </div>

            <div className="bg-white/5 border-l-4 border-white/40 p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-white/90 mb-2 uppercase tracking-wider">发展方向</h4>
              <p className="text-white text-xl">推动区块链技术在校园的应用和普及</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Members Section
export function MembersSection() {
  const members = [
    {
      name: "张明",
      role: "会长",
      bio: "区块链技术爱好者，专注于智能合约开发",
      contact: "zhangming@example.com",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "李芳",
      role: "副会长",
      bio: "数据分析专家，致力于区块链数据研究",
      contact: "lifang@example.com",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      name: "王伟",
      role: "技术负责人",
      bio: "全栈开发工程师，推动技术实践和创新",
      contact: "wangwei@example.com",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "陈思",
      role: "运营负责人",
      bio: "市场营销专业，负责协会品牌建设",
      contact: "chensi@example.com",
      color: "from-orange-400 to-orange-600"
    },
  ];

  return (
    <section id="members" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="协会成员" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <Card key={index} className="hover:-translate-y-2 duration-500">
              <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-full mb-6 shadow-lg shadow-white/5`} />
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-[#38bdf8] font-medium mb-4 text-sm tracking-wide uppercase">{member.role}</p>
              <p className="text-white/60 text-sm mb-6 leading-relaxed min-h-[3rem]">{member.bio}</p>
              <a href={`mailto:${member.contact}`} className="text-white/40 hover:text-[#38bdf8] text-xs transition-colors flex items-center gap-2">
                 EMAIL CONTACT
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#38bdf8]/10 to-[#34d399]/10 border border-white/10 rounded-2xl p-12 text-center backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-4">加入我们</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">我们欢迎所有对区块链技术感兴趣的学生加入链协大家庭！一起探索去中心化的未来。</p>
          <a
            href="mailto:join@example.com"
            className="inline-block px-10 py-4 bg-[#38bdf8] text-[#020617] rounded-full font-bold tracking-wider hover:bg-[#34d399] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#38bdf8]/20"
          >
            立即加入
          </a>
        </div>
      </div>
    </section>
  );
}

// Social Media Section
export function SocialMediaSection() {
  const platforms = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      description: "查看我们的代码仓库和项目",
      color: "bg-[#24292e] hover:bg-[#2f363d]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      description: "职业发展和行业信息",
      color: "bg-[#0077b5] hover:bg-[#008ec4]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      description: "关注我们的活动和更新",
      color: "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90",
    },
    {
      name: "WeChat",
      icon: MessageCircle,
      url: "#wechat",
      description: "加入我们的微信公众号",
      color: "bg-[#07c160] hover:bg-[#08d169]",
    },
  ];

  return (
    <section id="social" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="社交媒体" subtitle="在各大平台关注我们，获取最新资讯" />

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
          <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">更多联系方式</h3>
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
                    <p className="text-white font-medium">链协-Link Chain</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Resources Section
export function ResourcesSection() {
  const resources = [
    {
      title: "GitHub 代码仓库",
      description: "访问我们的 GitHub 账号获取最新的项目代码、教程和示例",
      icon: Code,
      url: "https://github.com",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      title: "区块链研报",
      description: "深度分析报告和行业研究，了解最新的技术动向和市场趋势",
      icon: FileText,
      url: "#research",
      gradient: "from-blue-600 to-blue-900",
    },
    {
      title: "学习资料",
      description: "精选的教程、文档和最佳实践指南，帮助你快速入门",
      icon: BookOpen,
      url: "#materials",
      gradient: "from-purple-600 to-purple-900",
    },
    {
      title: "下载中心",
      description: "获取会议资料、演讲稿、工具和其他相关文件",
      icon: Download,
      url: "#downloads",
      gradient: "from-emerald-600 to-emerald-900",
    },
  ];

  return (
    <section id="resources" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="共学资源" subtitle="整合最优质的学习资源，助力你的成长之旅" />

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
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Featured Resources */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#38bdf8] pl-4">精选资源</h3>
          <div className="space-y-4">
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">📚 区块链基础教程系列</h4>
              <p className="text-white/60">从零开始学习区块链技术，包括密码学、共识算法、智能合约等核心内容</p>
            </Card>
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">💻 Solidity 开发入门指南</h4>
              <p className="text-white/60">掌握智能合约开发技能，包括项目实战和常见安全问题</p>
            </Card>
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">🔗 DeFi 应用案例分析</h4>
              <p className="text-white/60">深入理解去中心化金融应用，学习市场前沿项目的运作机制</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

