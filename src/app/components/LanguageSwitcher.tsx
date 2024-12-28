"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  isScrolled: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        onClick={() => setLanguage("pt")}
        variant={language === "pt" ? "default" : "outline"}
        size="sm"
        className={`${
          isScrolled
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        PT
      </Button>
      <Button
        onClick={() => setLanguage("en")}
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        className={`${
          isScrolled
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
