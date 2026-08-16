import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Logo } from "@/components/Logo";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#003087] text-white mt-0">
      {/* Quote band */}
      <div className="bg-[#1a1a2e] py-10 px-6 text-center">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-lg italic text-gray-200 leading-relaxed font-light" style={{ fontFamily: "'Raleway', sans-serif" }}>
            {t("home.gibert.quote")}
          </p>
          <footer className="mt-4 text-sm text-gray-400 font-semibold tracking-wider uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
            {t("home.gibert.author")}
          </footer>
        </blockquote>
      </div>

      {/* Main footer */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & tagline */}
          <div className="flex flex-col items-start gap-4">
            <div className="bg-white p-2">
              <Logo size={80} />
            </div>
            <p className="text-sm text-blue-200 italic">{t("footer.tagline")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#C8102E] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {t("footer.nav")}
            </h4>
            <ul className="space-y-2">
              {[
                ["/", "nav.home"],
                ["/races", "nav.races"],
                ["/recettes", "nav.recettes"],
                ["/blogue", "nav.blogue"],
                ["/faq", "nav.faq"],
                ["/ressources", "nav.ressources"],
              ].map(([href, key]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-blue-200 hover:text-white transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* La ferme */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#C8102E] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {t("footer.laferme")}
            </h4>
            <ul className="space-y-2">
              {[
                ["/la-ferme", "nav.laFerme"],
                ["/boutique", "nav.boutique"],
                ["/contact", "nav.contact"],
              ].map(([href, key]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-blue-200 hover:text-white transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#C8102E] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {t("footer.contact")}
            </h4>
            <p className="text-sm text-blue-200 whitespace-pre-line leading-relaxed">{t("contact.address")}</p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-blue-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-6 text-center">
        <p className="text-xs text-blue-300">{t("footer.rights")} — <span className="italic">{t("footer.satirical")}</span></p>
      </div>
    </footer>
  );
}
