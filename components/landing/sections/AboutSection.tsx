"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";

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
              <p className="text-white text-xl">
                Promote the application and popularization of blockchain technology on campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
