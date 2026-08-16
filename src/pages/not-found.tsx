import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#faf8f4]">
      <div className="w-full max-w-md mx-4 border border-gray-200 bg-white p-10 text-center">
        <AlertCircle className="h-12 w-12 text-[#C8102E] mx-auto mb-6" />
        <h1 className="text-3xl font-black text-[#003087] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {t("notfound.title")}
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          {t("notfound.body")}
        </p>
        <Link href="/">
          <button className="bg-[#003087] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#C8102E] transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
            {t("notfound.cta")}
          </button>
        </Link>
      </div>
    </div>
  );
}
