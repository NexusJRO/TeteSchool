"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: (typeof translations)[Language];
}

const translations = {
  en: {
    home: "Home",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
    faq: "FAQ",
    navMenu: "Navigation Menu",
    accessSections: "Access all sections of our site",
    // FAQ Page translations
    faqPageTitle: "Frequently Asked Questions",
    faqPageSubtitle:
      "Find answers to the most common questions about our school.",
    backToHome: "Back to home",
    searchPlaceholder: "Search questions...",
    noQuestionsFound:
      "No questions found matching your search. Try different keywords.",
    categories: {
      Admissions: "Admissions",
      Schedule: "Schedule",
      "Daily Care": "Daily Care",
      Safety: "Safety",
      Education: "Education",
      "Parent Engagement": "Parent Engagement",
    },
  },
  pt: {
    home: "Início",
    about: "Sobre",
    gallery: "Galeria",
    contact: "Contato",
    faq: "Dúvidas",
    navMenu: "Menu de Navegação",
    accessSections: "Acesse todas as seções do nosso site",
    // FAQ Page translations
    faqPageTitle: "Perguntas Frequentes",
    faqPageSubtitle:
      "Encontre respostas para as perguntas mais comuns sobre nossa escola.",
    backToHome: "Voltar ao início",
    searchPlaceholder: "Pesquisar perguntas...",
    noQuestionsFound:
      "Nenhuma pergunta encontrada para sua busca. Tente palavras-chave diferentes.",
    categories: {
      Admissions: "Admissões",
      Schedule: "Horários",
      "Daily Care": "Cuidados Diários",
      Safety: "Segurança",
      Education: "Educação",
      "Parent Engagement": "Envolvimento dos Pais",
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const value = {
    language,
    setLanguage,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
