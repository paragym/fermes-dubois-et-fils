import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", key: "nav.home" },
    { href: "/races", key: "nav.races" },
    { href: "/recettes", key: "nav.recettes" },
    { href: "/blogue", key: "nav.blogue" },
    { href: "/faq", key: "nav.faq" },
    { href: "/ressources", key: "nav.ressources" },
    { href: "/boutique", key: "nav.boutique" },
    { href: "/la-ferme", key: "nav.laFerme" },
    { href: "/contact", key: "nav.contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#003087] text-white text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 flex justify-between items-center gap-2">
        <span className="font-medium tracking-wider uppercase truncate">{t("hero.badge")}</span>
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            data-testid="lang-toggle-fr"
            onClick={() => setLang("fr")}
            className={`px-2 py-0.5 text-xs font-bold tracking-wider transition-all ${lang === "fr" ? "bg-white text-[#003087]" : "hover:bg-white/20"}`}
          >
            FR
          </button>
          <button
            data-testid="lang-toggle-en"
            onClick={() => setLang("en")}
            className={`px-2 py-0.5 text-xs font-bold tracking-wider transition-all ${lang === "en" ? "bg-white text-[#003087]" : "hover:bg-white/20"}`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Logo center */}
      <div className="flex justify-center items-center py-3 sm:py-4 border-b border-border">
        <Link href="/" data-testid="logo-link" className="block">
          <span className="block sm:hidden">
            <Logo size={80} />
          </span>
          <span className="hidden sm:block">
            <Logo size={110} />
          </span>
        </Link>
      </div>

      {/* Nav links */}
      <nav className="hidden lg:flex justify-center gap-0 bg-white">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-testid={`nav-link-${link.key}`}
            className={`px-4 py-3 text-xs font-semibold tracking-widest uppercase transition-colors border-b-2 ${
              isActive(link.href)
                ? "border-[#C8102E] text-[#C8102E]"
                : "border-transparent text-[#003087] hover:text-[#C8102E] hover:border-[#C8102E]/30"
            }`}
          >
            {t(link.key)}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2 border-t border-border">
        <span className="text-sm font-bold text-[#003087] uppercase tracking-wider">{t("common.menu")}</span>
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative p-2 text-[#003087] hover:text-[#C8102E] transition-colors"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 90 : 0, scale: menuOpen ? 0 : 1, opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Menu size={22} />
          </motion.span>
          <motion.span
            animate={{ rotate: menuOpen ? 0 : -90, scale: menuOpen ? 1 : 0, opacity: menuOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <X size={22} />
          </motion.span>
          <span className="invisible block">
            <Menu size={22} />
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-t border-border overflow-hidden shadow-lg"
          >
            <div className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.025, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    data-testid={`mobile-nav-${link.key}`}
                    className={`block px-6 py-3.5 text-sm font-semibold tracking-wider uppercase border-l-4 transition-colors ${
                      isActive(link.href)
                        ? "border-[#C8102E] text-[#C8102E] bg-red-50"
                        : "border-transparent text-[#003087] hover:border-[#C8102E] hover:bg-gray-50 active:bg-gray-100"
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
