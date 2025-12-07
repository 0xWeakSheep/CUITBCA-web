"use client";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-white/60 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-[#38bdf8] mx-auto rounded-full mt-6" />
    </div>
  );
}
