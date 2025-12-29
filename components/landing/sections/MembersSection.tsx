"use client";

import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import { Linkedin, Mail, Twitter, Github } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { MemberProfile } from "@/types";
import { useLanguage } from "@/i18n/language-provider";

type SocialIconProps = {
  Icon: ComponentType<{ size?: number }>;
  href: string;
};

const SocialIcon = ({ Icon, href }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-[#38bdf8] hover:-translate-y-1 transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

const DEFAULT_MEMBERS = [
  {
    id: "d50",
    name: "D50",
    role: "会长",
    bio: "投研、产品、运营、UI... 一个绝望的 ENFJ",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "elemen",
    name: "Elemen",
    role: "CUITBCA副会长",
    bio: "前端和合约开发，vibe coder everything",
    twitter: "https://x.com/elemen_7",
    email: "lsenve3@gmail.com",
    github: "https://github.com/404ll",
    avatar: "https://github.com/404ll.png",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "jesira",
    name: "Jesira",
    role: "协会副会长",
    bio: "行研新手村，运营小牛马，前端学习ing",
    twitter: "https://x.com/Jesira_10086",
    email: "tuzidajisifaliwubian@gmail.com",
    github: "https://github.com/prystess",
    avatar: "https://github.com/prystess.png",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "kizy",
    name: "Kizy",
    role: "CUITBCA Builder",
    bio: "合约开发&&后端",
    twitter: "https://x.com/kizzy899",
    github: "https://github.com/kizzy899",
    avatar: "https://github.com/kizzy899.png",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "weaksheep",
    name: "WeakSheep",
    role: "核心成员",
    bio: "前后端",
    twitter: "https://x.com/0Xweaksheep",
    email: "oftiyf@gmail.com",
    github: "https://github.com/0xWeakSheep",
    avatar: "https://github.com/0xWeakSheep.png",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "march",
    name: "March",
    role: "CUITBCA Builder",
    bio: "合约开发&&前端",
    twitter: "https://x.com/tingSu534809",
    email: "sut060106@gmail.com",
    github: "https://github.com/0xMarch-food",
    avatar: "https://github.com/0xMarch-food.png",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "superoil",
    name: "Superoil",
    role: "CUITBCA Builder",
    bio: "前端学习，日常啃行研，无限进步ing",
    twitter: "https://x.com/superoil521?s=21",
    email: "superoil521424@gmail.com",
    github: "https://github.com/Superspider-ox",
    avatar: "https://github.com/Superspider-ox.png",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "aquatri",
    name: "AquaTri",
    role: "CUITBCA Builder",
    bio: "行研upgrading, 多方探索中",
    twitter: "https://x.com/wilvis_",
    email: "wilvis142857@gmail.com",
    github: "https://github.com/wilvislee",
    avatar: "https://github.com/wilvislee.png",
    color: "from-teal-500 to-green-500"
  },
  {
    id: "daisy",
    name: "Daisy",
    role: "CUITBCA builder",
    bio: "web3小白，努力探索ing…",
    twitter: "https://x.com/daisy8lome?t=bN4duv7ggI5NTe7cyw7Ubg&s=09",
    email: "yuhaoxiangkeyizuorengonghuxi@gmail.com",
    github: "https://github.com/Daisy-yue",
    avatar: "https://github.com/Daisy-yue.png",
    color: "from-violet-500 to-purple-500"
  }
];

export function MembersSection() {
  const { messages } = useLanguage();
  const membersContent = messages.members;
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        // 从后端获取成员数据
        // 由于目前没有真实的后端，或者为了演示，我们可以先尝试 fetch，
        // 如果 fetch 失败或者返回空，就用默认数据。
        // 这里为了确保用户看到效果，我们假设 fetch 总是失败或者返回空，或者直接把 fetch 逻辑改成优先使用 default
        
        let data = [];
        try {
            const response = await fetch('/api/members');
            if (response.ok) {
                data = await response.json();
            }
        } catch (e) {
            console.warn("Failed to fetch members, using default data");
        }
        
        if (!data || data.length === 0) {
            setMembers(DEFAULT_MEMBERS);
        } else {
            setMembers(data);
        }
      } catch (error) {
        console.error('Failed to fetch members:', error);
        setMembers(DEFAULT_MEMBERS);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section id="members" className="relative z-10 w-full py-24 px-4 bg-gradient-to-b from-transparent to-[#020617]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={membersContent.title} />

        {loading ? (
          <div className="text-center text-white py-12">Loading...</div>
        ) : members.length === 0 ? (
          <div className="text-center text-white/60 py-12">暂无成员信息</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {members
              .filter((member) => member.name || member.id) // 至少要有name或id才显示
              .map((member, index) => {
                // 收集社交链接
                const socialLinks = [];
                if (member.github) {
                    socialLinks.push({ Icon: Github, href: member.github });
                }
                if (member.twitter) {
                  socialLinks.push({ Icon: Twitter, href: member.twitter });
                }
                if (member.linkedin) {
                  socialLinks.push({ Icon: Linkedin, href: member.linkedin });
                }
                if (member.email || member.contact) {
                  // 如果是 contact 且不是邮箱格式，可能需要特殊处理，但这里先假设是邮箱
                  const email = member.email || member.contact;
                  if (email && email.includes('@')) {
                      socialLinks.push({ Icon: Mail, href: `mailto:${email}` });
                  }
                }

                // 判断是否显示图片区域（有avatar或color）
                // 对于 Github 用户，通常有头像，我们优先使用 avatar
                const hasImageArea = true; // 即使没有 avatar 也有 color，始终显示

                return (
                  <div
                    key={member.id || member.contact || index}
                    className="group relative bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#38bdf8]/30 transition-all duration-300"
                  >
                    {/* Image Area */}
                    <div
                        className={`relative aspect-square overflow-hidden ${
                          member.color ? `bg-gradient-to-br ${member.color}` : 'bg-gradient-to-br from-slate-700 to-slate-800'
                        }`}
                      >
                        {member.avatar && (
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${member.avatar})` }}
                            />
                        )}
                        
                        {/* Overlay with Social Icons */}
                        {socialLinks.length > 0 && (
                          <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center gap-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out z-10">
                            {socialLinks.map((link, linkIndex) => (
                              <SocialIcon key={linkIndex} Icon={link.Icon} href={link.href} />
                            ))}
                          </div>
                        )}

                        {/* Decorative Pattern */}
                        {member.noiseBackground && (
                          <div
                            className="absolute inset-0 opacity-20 mix-blend-overlay"
                            style={{ backgroundImage: `url(${member.noiseBackground})` }}
                          />
                        )}
                      </div>

                    {/* Content Area */}
                    <div className="p-6 relative z-20">
                        {member.name && (
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#38bdf8] transition-colors">{member.name}</h3>
                        )}
                        {member.role && (
                          <p className="text-[#38bdf8] font-semibold text-xs mb-4 uppercase tracking-wider">{member.role}</p>
                        )}
                        {member.bio && (
                          <p className="text-white/60 text-sm leading-relaxed mb-4 min-h-[3rem] line-clamp-3">
                            {member.bio}
                          </p>
                        )}
                        
                        {/* Skills */}
                        {member.skills && member.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill: string, skillIndex: number) => (
                              <span key={skillIndex} className="px-2 py-1 bg-white/5 text-white/50 text-[10px] rounded hover:bg-[#38bdf8]/10 hover:text-[#38bdf8] transition-colors duration-300">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        <div className="mt-20 relative overflow-hidden rounded-2xl p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/10 to-[#34d399]/10 backdrop-blur-md border border-white/10" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">{membersContent.ctaTitle}</h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">{membersContent.ctaDescription}</p>
            <a
              href={`mailto:${membersContent.ctaEmail}`}
              className="inline-block px-10 py-4 bg-gradient-to-r from-[#38bdf8] to-[#34d399] text-[#020617] rounded-full font-bold tracking-wider hover:scale-105 hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all duration-300"
            >
              {membersContent.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
