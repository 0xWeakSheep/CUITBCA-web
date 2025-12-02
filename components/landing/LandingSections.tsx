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
        <SectionHeader title="About Us" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">Our Mission</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                CUITBCA is dedicated to promoting the understanding and application of blockchain technology on campus, providing students with a platform for learning, exchange, and practice. We believe blockchain technology will shape the future.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">Our Vision</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                To build an open, inclusive, and innovative learning community that helps students master blockchain technology and cultivate outstanding talent for the industry.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#38bdf8] mb-3">Our Values</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3 items-center">
                  <span>Openness - Welcome all students interested in blockchain</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span>Innovation - Continuously explore new learning approaches</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span>Practicality - Combine theory with practice</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#38bdf8]/10 border-l-4 border-[#38bdf8] p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-[#38bdf8] mb-2 uppercase tracking-wider">Founded</h4>
              <p className="text-white text-xl">2020</p>
            </div>

            <div className="bg-[#34d399]/10 border-l-4 border-[#34d399] p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-[#34d399] mb-2 uppercase tracking-wider">Members</h4>
              <p className="text-white text-xl">500+ Active Members</p>
            </div>

            <div className="bg-purple-500/10 border-l-4 border-purple-500 p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-purple-400 mb-2 uppercase tracking-wider">Activity Frequency</h4>
              <p className="text-white text-xl">Weekly online sharing and practice activities</p>
            </div>

            <div className="bg-white/5 border-l-4 border-white/40 p-6 rounded-r-lg backdrop-blur-sm">
              <h4 className="font-bold text-white/90 mb-2 uppercase tracking-wider">Development Direction</h4>
              <p className="text-white text-xl">Promote the application and popularization of blockchain technology on campus</p>
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
      name: "Zhang Ming",
      role: "President",
      bio: "Blockchain technology enthusiast, focused on smart contract development",
      contact: "zhangming@example.com",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Li Fang",
      role: "Vice President",
      bio: "Data analysis expert, dedicated to blockchain data research",
      contact: "lifang@example.com",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      name: "Wang Wei",
      role: "Technical Lead",
      bio: "Full-stack developer, driving technical practice and innovation",
      contact: "wangwei@example.com",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Chen Si",
      role: "Operations Lead",
      bio: "Marketing professional, responsible for association brand building",
      contact: "chensi@example.com",
      color: "from-orange-400 to-orange-600"
    },
  ];

  return (
    <section id="members" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Team Members" />

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
          <h3 className="text-2xl font-bold text-white mb-4">Join Us</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">We welcome all students interested in blockchain technology to join the CUITBCA family! Together, let's explore the decentralized future.</p>
          <a
            href="mailto:join@example.com"
            className="inline-block px-10 py-4 bg-[#38bdf8] text-[#020617] rounded-full font-bold tracking-wider hover:bg-[#34d399] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#38bdf8]/20"
          >
            Join Now
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

// Resources Section
export function ResourcesSection() {
  const resources = [
    {
      title: "GitHub Repository",
      description: "Visit our GitHub account to access the latest project code, tutorials, and examples",
      icon: Code,
      url: "https://github.com",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      title: "Blockchain Research Reports",
      description: "In-depth analysis reports and industry research to understand the latest technological trends and market dynamics",
      icon: FileText,
      url: "#research",
      gradient: "from-blue-600 to-blue-900",
    },
    {
      title: "Learning Materials",
      description: "Curated tutorials, documentation, and best practice guides to help you get started quickly",
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

  return (
    <section id="resources" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Learning Resources" subtitle="Integrating the highest quality learning resources to support your growth journey" />

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
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#38bdf8] pl-4">Featured Resources</h3>
          <div className="space-y-4">
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">📚 Blockchain Fundamentals Tutorial Series</h4>
              <p className="text-white/60">Learn blockchain technology from scratch, including cryptography, consensus algorithms, smart contracts, and other core content</p>
            </Card>
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">💻 Solidity Development Beginner's Guide</h4>
              <p className="text-white/60">Master smart contract development skills, including project practice and common security issues</p>
            </Card>
            <Card className="group cursor-pointer hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">🔗 DeFi Application Case Analysis</h4>
              <p className="text-white/60">Deeply understand decentralized finance applications and learn the operational mechanisms of cutting-edge market projects</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

