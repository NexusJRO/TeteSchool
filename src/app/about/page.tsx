"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Star, Trophy, Globe, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const translations = {
  en: {
    backToHome: "Back to home",
    aboutUs: "About Us",
    aboutUsDescription:
      "Discover our mission, vision, and values that drive our commitment to educational excellence and innovation.",
    tabNames: {
      about: "About",
      mission: "Mission",
      vision: "Vision",
    },
    content: {
      about: {
        paragraph1:
          "Tete Junior School is a distinguished educational institution dedicated to fostering excellence in learning and nurturing holistic development. We are proudly certified to deliver both international and national curricula, combining global standards with local relevance.",
        paragraph2:
          "Our mission is to empower students to achieve their fullest potential by tailoring learning experiences to their unique needs, interests, and abilities. We cultivate an inspiring and inclusive environment where students develop academically, socially, emotionally, and ethically.",
      },
      mission: {
        title: "Our Mission",
        description:
          "Providing high-quality education that fosters critical thinking, creativity, and social responsibility through innovative teaching methods and high academic standards.",
        keyObjectives: "Key Objectives",
        objectives: [
          {
            icon: Star,
            text: "Be an international and bilingual curriculum school.",
          },
          {
            icon: Globe,
            text: "Integrate core educational values.",
          },
          {
            icon: Trophy,
            text: "Employ highly qualified and experienced staff.",
          },
        ],
      },
      vision: {
        title: "Our Vision",
        description:
          "To be a leader in pedagogical innovation, promoting an inclusive and inspiring educational environment where all students can thrive.",
      },
    },
  },
  pt: {
    backToHome: "Voltar para página inicial",
    aboutUs: "Sobre Nós",
    aboutUsDescription:
      "Descubra nossa missão, visão e valores que impulsionam nosso compromisso com a excelência educacional e inovação.",
    tabNames: {
      about: "Sobre",
      mission: "Missão",
      vision: "Visão",
    },
    content: {
      about: {
        paragraph1:
          "A Tete Junior School é uma instituição educacional distinta dedicada a promover a excelência no aprendizado e nutrir o desenvolvimento holístico. Somos orgulhosamente certificados para oferecer currículos internacionais e nacionais, combinando padrões globais com relevância local.",
        paragraph2:
          "Nossa missão é capacitar os alunos a atingirem seu máximo potencial, adaptando as experiências de aprendizagem às suas necessidades, interesses e habilidades únicas. Cultivamos um ambiente inspirador e inclusivo onde os alunos se desenvolvem academicamente, socialmente, emocionalmente e eticamente.",
      },
      mission: {
        title: "Nossa Missão",
        description:
          "Fornecer educação de alta qualidade que promova pensamento crítico, criatividade e responsabilidade social através de métodos de ensino inovadores e altos padrões acadêmicos.",
        keyObjectives: "Objetivos Principais",
        objectives: [
          {
            icon: Star,
            text: "Ser uma escola com currículo internacional e bilíngue.",
          },
          {
            icon: Globe,
            text: "Integrar valores educacionais fundamentais.",
          },
          {
            icon: Trophy,
            text: "Empregar equipe altamente qualificada e experiente.",
          },
        ],
      },
      vision: {
        title: "Nossa Visão",
        description:
          "Ser líder em inovação pedagógica, promovendo um ambiente educacional inclusivo e inspirador onde todos os alunos possam prosperar.",
      },
    },
  },
};

export default function About() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
            {t.aboutUs}
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            {t.aboutUsDescription}
          </p>
        </div>
      </div>

      <section className="py-4">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="bg-white shadow-2xl rounded-xl overflow-hidden"
          >
            <Tabs defaultValue="about" className="w-full">
              <div className="bg-black p-6 border-b">
                <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
                  {Object.entries(t.tabNames).map(([key, value]) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-3 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span className="font-medium text-white">{value}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="p-8 py-2">
                <TabsContent value="about" className="mt-3">
                  <motion.div
                    variants={cardVariants}
                    className="space-y-6 max-w-4xl mx-auto"
                  >
                    <p className="text-gray-700 text-justify leading-relaxed">
                      {t.content.about.paragraph1}
                    </p>
                    <p className="text-gray-700 text-justify leading-relaxed">
                      {t.content.about.paragraph2}
                    </p>
                  </motion.div>
                </TabsContent>

                <TabsContent value="mission" className="mt-6">
                  <motion.div className="space-y-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                      <h3 className="text-xl font-bold text-gray-800">
                        {t.content.mission.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-justify leading-relaxed">
                      {t.content.mission.description}
                    </p>
                    <div className="mt-8 bg-blue-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-blue-800 mb-4">
                        {t.content.mission.keyObjectives}
                      </h4>
                      <ul className="space-y-4">
                        {t.content.mission.objectives.map((value, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-700 bg-white p-4 rounded-lg shadow-sm"
                          >
                            <value.icon className="w-6 h-6 mr-4 text-blue-500 flex-shrink-0" />
                            <span>{value.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="vision" className="mt-6">
                  <motion.div className="space-y-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                      <h3 className="text-xl font-bold text-gray-800">
                        {t.content.vision.title}
                      </h3>
                    </div>
                    <div className="p-1 rounded-xl">
                      <p className="text-gray-700 leading-relaxed">
                        {t.content.vision.description}
                      </p>
                    </div>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
