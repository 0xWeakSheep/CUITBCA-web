"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { MemberProfile } from "@/types";
import { useLanguage } from "@/i18n/language-provider";

export function MembersSection() {
  const { messages } = useLanguage();
  const membersContent = messages.members;
  const members = membersContent.list as MemberProfile[];

  return (
    <section id="members" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={membersContent.title} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <Card key={member.contact} className="hover:-translate-y-2 duration-500">
              <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-full mb-6 shadow-lg shadow-white/5`} />
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-[#38bdf8] font-medium mb-4 text-sm tracking-wide uppercase">{member.role}</p>
              <p className="text-white/60 text-sm mb-6 leading-relaxed min-h-[3rem]">{member.bio}</p>
              <a
                href={`mailto:${member.contact}`}
                className="text-white/40 hover:text-[#38bdf8] text-xs transition-colors flex items-center gap-2"
              >
                {membersContent.emailLabel}
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#38bdf8]/10 to-[#34d399]/10 border border-white/10 rounded-2xl p-12 text-center backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-4">{membersContent.ctaTitle}</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">{membersContent.ctaDescription}</p>
          <a
            href={`mailto:${membersContent.ctaEmail}`}
            className="inline-block px-10 py-4 bg-[#38bdf8] text-[#020617] rounded-full font-bold tracking-wider hover:bg-[#34d399] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#38bdf8]/20"
          >
            {membersContent.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
