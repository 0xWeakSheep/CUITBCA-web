"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { MemberProfile } from "@/types";

const members: MemberProfile[] = [
  {
    name: "Zhang Ming",
    role: "President",
    bio: "Blockchain technology enthusiast, focused on smart contract development",
    contact: "zhangming@example.com",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Li Fang",
    role: "Vice President",
    bio: "Data analysis expert, dedicated to blockchain data research",
    contact: "lifang@example.com",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    name: "Wang Wei",
    role: "Technical Lead",
    bio: "Full-stack developer, driving technical practice and innovation",
    contact: "wangwei@example.com",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Chen Si",
    role: "Operations Lead",
    bio: "Marketing professional, responsible for association brand building",
    contact: "chensi@example.com",
    color: "from-orange-400 to-orange-600",
  },
];

export function MembersSection() {
  return (
    <section id="members" className="relative z-10 w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Team Members" />

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
                EMAIL CONTACT
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#38bdf8]/10 to-[#34d399]/10 border border-white/10 rounded-2xl p-12 text-center backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-4">Join Us</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            We welcome all students interested in blockchain technology to join the CUITBCA family! Together, let&apos;s explore the decentralized future.
          </p>
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
