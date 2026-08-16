import { useState } from "react";
import { Facebook, Twitter, Mail, Link2, MessageCircle, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Variant = "light" | "dark";

interface ShareButtonsProps {
  variant?: Variant;
  testIdPrefix?: string;
}

export default function ShareButtons({ variant = "dark", testIdPrefix = "share" }: ShareButtonsProps) {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const url = typeof window !== "undefined" ? window.location.origin : "https://fermesduboisetfils.ca";
  const shareText =
    lang === "fr"
      ? "Fermes Dubois et fils — Viande de Chien Bio du Québec. Élevés en plein air depuis 1987."
      : "Fermes Dubois et fils — Organic Quebec Dog Meat. Raised in open pastures since 1987.";

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(shareText);

  const links = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent("Fermes Dubois et fils")}&body=${encodedText}%20${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const isLight = variant === "light";
  const baseBtn = isLight
    ? "border-gray-300 text-gray-700 hover:bg-gray-100"
    : "border-white/40 text-white hover:bg-white/10";
  const labelClass = isLight ? "text-gray-600" : "text-white/80";

  return (
    <div className="flex flex-col items-center gap-3" data-testid={`${testIdPrefix}-buttons`}>
      <p
        className={`text-xs font-bold tracking-widest uppercase ${labelClass}`}
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        {t("share.label")}
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("share.shareOn")} ${l.name}`}
              data-testid={`${testIdPrefix}-${l.name.toLowerCase()}`}
              className={`inline-flex items-center justify-center w-11 h-11 border-2 transition-all ${baseBtn}`}
            >
              <Icon size={18} />
            </a>
          );
        })}
        <button
          type="button"
          onClick={handleCopy}
          aria-label={t("share.copy")}
          data-testid={`${testIdPrefix}-copy`}
          className={`inline-flex items-center justify-center w-11 h-11 border-2 transition-all ${baseBtn}`}
        >
          {copied ? <Check size={18} /> : <Link2 size={18} />}
        </button>
      </div>
      {copied && (
        <span className={`text-xs ${labelClass}`} data-testid={`${testIdPrefix}-copied`}>
          {t("share.copied")}
        </span>
      )}
    </div>
  );
}
