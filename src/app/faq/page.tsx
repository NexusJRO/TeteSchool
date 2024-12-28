"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ChevronDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";

const translations = {
  en: {
    backToHome: "Back to Home",
    faqPageTitle: "Frequently Asked Questions",
    faqPageSubtitle: "Find answers to common questions about our school",
    searchPlaceholder: "Search questions...",
    noQuestionsFound:
      "No questions found matching your search. Try different keywords.",
    faqs: [
      {
        question: "What ages do you accept?",
        answer:
          "We welcome children from 3 to 6 years old, providing a nurturing early learning environment tailored to their developmental stages.",
        category: "Admissions",
      },
      {
        question: "What are your school hours?",
        answer:
          "Our school operates from 8:00 AM to 3:30 PM, with optional early drop-off from 7:00 AM and after-school programs until 6:00 PM to accommodate working parents.",
        category: "Schedule",
      },
      {
        question: "Do you provide meals?",
        answer:
          "Yes! We offer nutritious, balanced meals prepared fresh daily by our in-house chef. All meals follow dietary guidelines and we can accommodate special dietary requirements and allergies.",
        category: "Daily Care",
      },
      {
        question: "How do you ensure child safety?",
        answer:
          "Child safety is our top priority. We maintain strict security protocols including biometric access control, CCTV monitoring, background-checked staff, secured premises, and constant supervision. All staff are trained in first aid and emergency procedures.",
        category: "Safety",
      },
      {
        question: "What educational approach do you use?",
        answer:
          "We blend play-based learning with structured activities, focusing on holistic development through creativity, exploration, and fun. Our curriculum incorporates elements of Montessori, Reggio Emilia, and traditional teaching methods.",
        category: "Education",
      },
      {
        question: "How can parents stay involved?",
        answer:
          "We encourage parent participation through our dedicated parent portal app, regular updates, monthly parent-teacher meetings, volunteering opportunities, and interactive school events. Parents can also join our Parent Advisory Committee.",
        category: "Parent Engagement",
      },
    ],
  },
  pt: {
    backToHome: "Voltar para Início",
    faqPageTitle: "Perguntas Frequentes",
    faqPageSubtitle:
      "Encontre respostas para perguntas comuns sobre nossa escola",
    searchPlaceholder: "Pesquisar perguntas...",
    noQuestionsFound:
      "Nenhuma pergunta encontrada para sua busca. Tente palavras-chave diferentes.",
    faqs: [
      {
        question: "Quais idades vocês aceitam?",
        answer:
          "Recebemos crianças de 3 a 6 anos, proporcionando um ambiente de aprendizagem inicial acolhedor, adaptado aos seus estágios de desenvolvimento.",
        category: "Admissões",
      },
      {
        question: "Quais são os horários da escola?",
        answer:
          "Nossa escola funciona das 8:00 às 15:30, com opção de entrada antecipada a partir das 7:00 e programas após a escola até às 18:00 para acomodar pais que trabalham.",
        category: "Horários",
      },
      {
        question: "Vocês fornecem refeições?",
        answer:
          "Sim! Oferecemos refeições nutritivas e balanceadas, preparadas diariamente pelo nosso chef interno. Todas as refeições seguem diretrizes nutricionais e podemos acomodar requisitos dietéticos especiais e alergias.",
        category: "Cuidados Diários",
      },
      {
        question: "Como vocês garantem a segurança das crianças?",
        answer:
          "A segurança das crianças é nossa prioridade. Mantemos protocolos rigorosos de segurança, incluindo controle de acesso biométrico, monitoramento por CFTV, equipe com verificação de antecedentes, instalações seguras e supervisão constante. Toda a equipe é treinada em primeiros socorros e procedimentos de emergência.",
        category: "Segurança",
      },
      {
        question: "Qual abordagem educacional vocês utilizam?",
        answer:
          "Combinamos aprendizado baseado em brincadeiras com atividades estruturadas, focando no desenvolvimento holístico através da criatividade, exploração e diversão. Nosso currículo incorpora elementos dos métodos Montessori, Reggio Emilia e ensino tradicional.",
        category: "Educação",
      },
      {
        question: "Como os pais podem participar?",
        answer:
          "Incentivamos a participação dos pais através do nosso aplicativo portal dedicado, atualizações regulares, reuniões mensais entre pais e professores, oportunidades de voluntariado e eventos escolares interativos. Os pais também podem participar do nosso Comitê Consultivo de Pais.",
        category: "Envolvimento dos Pais",
      },
    ],
  },
};

const SchoolFAQPage = () => {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredAndGroupedFAQs = useMemo(() => {
    const searchTerm = searchQuery.toLowerCase();
    const filtered = t.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm) ||
        faq.category.toLowerCase().includes(searchTerm)
    );

    return filtered.reduce<Record<string, typeof filtered>>((acc, faq) => {
      if (!acc[faq.category]) {
        acc[faq.category] = [];
      }
      acc[faq.category].push(faq);
      return acc;
    }, {});
  }, [searchQuery, t.faqs]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Hero Section */}
      <div className="relative h-64">
        <div className="absolute inset-0"></div>
        <img
          src="/banner/25.png"
          alt="FAQ Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => router.push("/")}
              className="flex items-center text-white hover:text-blue-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t.backToHome}
            </button>

            {/* Language Switcher Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => setLanguage("pt")}
                variant={language === "pt" ? "default" : "outline"}
                size="sm"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                PT
              </Button>
              <Button
                onClick={() => setLanguage("en")}
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                EN
              </Button>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.faqPageTitle}
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">{t.faqPageSubtitle}</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-20">
        <div className="py-14">
          <div className="mb-12">
            <div className="relative max-w-xl mx-auto">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(filteredAndGroupedFAQs).map(
              ([category, categoryFaqs]) => (
                <div key={category} className="flex flex-col h-full">
                  <Card className="h-full flex flex-col bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 bg-blue-200">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {category}
                      </h3>
                    </div>
                    <div className="flex-1 divide-y divide-gray-100">
                      {categoryFaqs.map((faq) => {
                        const globalIndex = t.faqs.findIndex(
                          (f) => f.question === faq.question
                        );
                        const isActive = activeIndices.includes(globalIndex);

                        return (
                          <div key={faq.question} className="relative">
                            <button
                              onClick={() => toggleFAQ(globalIndex)}
                              className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                              aria-expanded={isActive}
                            >
                              <h4 className="text-base font-medium text-gray-700 pr-8">
                                {faq.question}
                              </h4>
                              <ChevronDown
                                className={`absolute right-4 top-5 text-gray-400 transition-transform duration-200 ${
                                  isActive ? "rotate-180" : ""
                                }`}
                                size={18}
                              />
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-200 ${
                                isActive ? "max-h-96" : "max-h-0"
                              }`}
                            >
                              <p className="p-4 text-gray-600 text-sm bg-gray-50">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </div>
              )
            )}
          </div>

          {Object.keys(filteredAndGroupedFAQs).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t.noQuestionsFound}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolFAQPage;
