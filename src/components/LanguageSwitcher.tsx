import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru");
  };

  const nextLanguage = language === "ru" ? "en" : "ru";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
      className="h-8 rounded-full border border-[#f4efd2]/10 bg-black/20 px-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#f4efd2]/55 transition hover:border-[#22c55e]/35 hover:bg-[#032616] hover:text-[#22c55e]"
    >
      <span className="mr-1.5 text-sm leading-none">
        {language === "ru" ? "🇬🇧" : "🇷🇺"}
      </span>

      <span>{language === "ru" ? "EN" : "RU"}</span>
    </Button>
  );
}