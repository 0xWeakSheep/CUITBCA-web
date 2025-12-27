"use client";

import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import { Linkedin, Mail, Twitter } from "lucide-react";
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
    className="w-9 h-9 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-[#38bdf8] hover:-translate-y-1 transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

export function MembersSection() {
  const { messages } = useLanguage();
  const membersContent = messages.members;
  const [members, setMembers] = useState<MemberProfile[]>(membersContent.list as MemberProfile[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        // 从后端获取成员数据
        const response = await fetch('/api/members');
        if (response.ok) {
          const data = await response.json();
          setMembers(data);
        } else {
          // 如果后端返回错误，使用默认数据
          setMembers(membersContent.list as MemberProfile[]);
        }
      } catch (error) {
        console.error('Failed to fetch members:', error);
        // 如果后端请求失败，使用默认数据
        setMembers(membersContent.list as MemberProfile[]);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="members" className="relative z-10 w-full py-24 px-4 bg-gradient-to-b from-transparent to-[#020617]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={membersContent.title} />

        {loading ? (
          <div className="text-center text-white py-12">Loading...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {members.map((member, index) => {
              // 收集社交链接，只显示后端有传的
              const socialLinks = [];
              if (member.linkedin) {
                socialLinks.push({ Icon: Linkedin, href: member.linkedin });
              }
              if (member.twitter) {
                socialLinks.push({ Icon: Twitter, href: member.twitter });
              }
              if (member.email || member.contact) {
                socialLinks.push({ Icon: Mail, href: `mailto:${member.email || member.contact}` });
              }

              return (
                <div
                  key={member.contact || index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-400"
                >
                  {/* Image Area (using gradient placeholder as per current data) */}
                  <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${member.color}`}>
                    {/* Overlay with Social Icons - only show if there are social links */}
                    {socialLinks.length > 0 && (
                      <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center gap-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out z-10">
                        {socialLinks.map((link, linkIndex) => (
                          <SocialIcon key={linkIndex} Icon={link.Icon} href={link.href} />
                        ))}
                      </div>
                    )}

                    {/* Decorative Pattern in background - only show if noiseBackground is provided */}
                    {member.noiseBackground && (
                      <div
                        className="absolute inset-0 opacity-20 mix-blend-overlay"
                        style={{ backgroundImage: `url(${member.noiseBackground})` }}
                      />
                    )}
                  </div>

                  <div className="p-6 bg-white relative z-20">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-[#38bdf8] font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 min-h-[3rem]">
                      {member.bio}
                    </p>
                    
                    {/* Skills - only show if provided by backend */}
                    {member.skills && member.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full group-hover:bg-[#38bdf8] group-hover:text-white transition-colors duration-300">
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
