"use client";

import { useLanguage } from "@/i18n/language-provider";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#020617]/80 backdrop-blur-xl py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#34d399]">CUITBCA</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#about" className="hover:text-[#38bdf8] transition-colors">{t("footer.aboutUs")}</a></li>
              <li><a href="#members" className="hover:text-[#38bdf8] transition-colors">{t("nav.members")}</a></li>
              <li><a href="#resources" className="hover:text-[#38bdf8] transition-colors">{t("nav.resources")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">{t("footer.social")}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#38bdf8] transition-colors">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">{t("footer.contact")}</h4>
            <p className="text-sm text-white/60 mb-2">📧 contact@cuitbca.com</p>
            <p className="text-sm text-white/60">📍 CUIT Campus</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center opacity-50 text-sm">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

