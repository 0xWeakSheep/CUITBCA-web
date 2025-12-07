"use client";

import { useLanguage } from "@/i18n/language-provider";

export function Footer() {
  const { messages } = useLanguage();
  const footer = messages.footer;

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#020617]/80 backdrop-blur-xl py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#34d399]">
              CUITBCA
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">{footer.aboutDescription}</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">{footer.quickLinksTitle}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#38bdf8] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">{footer.socialTitle}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {footer.socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#38bdf8] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">{footer.contactTitle}</h4>
            <p className="text-sm text-white/60 mb-2">📧 {footer.contactEmail}</p>
            <p className="text-sm text-white/60">📍 {footer.contactAddress}</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center opacity-50 text-sm">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
