import { useLanguage } from "@/app/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import {
  Music,
  Pencil,
  Book,
  Monitor,
  Palette,
  Dumbbell,
  Languages,
  Brain,
  Theater,
  Puzzle,
  Swords,
  LucideIcon,
} from "lucide-react";
import React, { useState } from "react";

// Define interfaces for type safety
interface Activity {
  title: string;
  description: string;
  highlight?: boolean;
}

interface LanguageTranslations {
  sectionTitle: string;
  sectionDescription: string;
  showMoreButton: string;
  footerText: string;
  activities: Activity[];
}

interface ActivitiesTranslations {
  en: LanguageTranslations;
  pt: LanguageTranslations;
}

export default function LearningActivities() {
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();

  const activitiesTranslations: ActivitiesTranslations = {
    en: {
      sectionTitle: "Learning Through Discovery",
      sectionDescription:
        "Our comprehensive program helps children develop essential skills, discover their passions, and grow into confident learners through engaging activities and expert guidance.",
      showMoreButton: "Show More Activities",
      footerText:
        "Each activity is carefully designed to foster growth, creativity, and joy in learning while building essential life skills for your child's future.",
      activities: [
        {
          title: "Martial Arts",
          description:
            "Build confidence, discipline, and physical fitness through traditional martial arts training adapted for young learners.",
          highlight: true,
        },
        {
          title: "Music & Singing",
          description:
            "Develop musical talent through choir, instrumental lessons, and fun singing activities that boost creativity and self-expression.",
        },
        {
          title: "Dance & Movement",
          description:
            "Express creativity through various dance styles, improving coordination, rhythm, and social skills in a joyful environment.",
        },
        {
          title: "Creative Writing",
          description:
            "Foster imagination and communication skills through storytelling, poetry, and creative writing workshops.",
        },
        {
          title: "Reading Adventure",
          description:
            "Journey through exciting stories and literature, building strong comprehension skills and a lifelong love for reading.",
          highlight: true,
        },
        {
          title: "Digital Skills",
          description:
            "Learn essential technology skills through interactive games and age-appropriate coding activities.",
        },
        {
          title: "Visual Arts",
          description:
            "Explore painting, drawing, and crafts while developing fine motor skills and artistic expression.",
        },
        {
          title: "Physical Education",
          description:
            "Stay active and healthy through sports, games, and activities that promote teamwork and motor skills.",
        },
        {
          title: "Language Skills",
          description:
            "Learn new languages through immersive activities, songs, and interactive games.",
          highlight: true,
        },
        {
          title: "Critical Thinking",
          description:
            "Develop problem-solving abilities through engaging puzzles, games, and creative challenges.",
        },
        {
          title: "Science Discovery",
          description:
            "Explore the wonders of science through hands-on experiments and exciting discoveries.",
        },
        {
          title: "Performance Arts",
          description:
            "Build confidence through drama, public speaking, and theatrical performances.",
        },
      ],
    },
    pt: {
      sectionTitle: "Aprendendo Através da Descoberta",
      sectionDescription:
        "Nosso programa abrangente ajuda as crianças a desenvolverem habilidades essenciais, descobrirem suas paixões e se tornarem aprendizes confiantes através de atividades envolventes e orientação especializada.",
      showMoreButton: "Mostrar Mais Atividades",
      footerText:
        "Cada atividade é cuidadosamente projetada para promover o crescimento, a criatividade e a alegria no aprendizado, enquanto desenvolve habilidades essenciais para o futuro do seu filho.",
      activities: [
        {
          title: "Artes Marciais",
          description:
            "Desenvolva confiança, disciplina e aptidão física através do treinamento tradicional de artes marciais adaptado para jovens aprendizes.",
          highlight: true,
        },
        {
          title: "Música e Canto",
          description:
            "Desenvolva talento musical através de coral, aulas de instrumentos e atividades divertidas de canto que estimulam a criatividade e a autoexpressão.",
        },
        {
          title: "Dança e Movimento",
          description:
            "Expresse criatividade através de vários estilos de dança, melhorando coordenação, ritmo e habilidades sociais em um ambiente alegre.",
        },
        {
          title: "Escrita Criativa",
          description:
            "Estimule a imaginação e as habilidades de comunicação através de contação de histórias, poesia e oficinas de escrita criativa.",
        },
        {
          title: "Aventura na Leitura",
          description:
            "Viaje através de histórias emocionantes e literatura, construindo fortes habilidades de compreensão e um amor duradouro pela leitura.",
          highlight: true,
        },
        {
          title: "Habilidades Digitais",
          description:
            "Aprenda habilidades essenciais de tecnologia através de jogos interativos e atividades de programação apropriadas para a idade.",
        },
        {
          title: "Artes Visuais",
          description:
            "Explore pintura, desenho e artesanato enquanto desenvolve habilidades motoras finas e expressão artística.",
        },
        {
          title: "Educação Física",
          description:
            "Mantenha-se ativo e saudável através de esportes, jogos e atividades que promovem trabalho em equipe e habilidades motoras.",
        },
        {
          title: "Habilidades Linguísticas",
          description:
            "Aprenda novos idiomas através de atividades imersivas, músicas e jogos interativos.",
          highlight: true,
        },
        {
          title: "Pensamento Crítico",
          description:
            "Desenvolva habilidades de resolução de problemas através de quebra-cabeças envolventes, jogos e desafios criativos.",
        },
        {
          title: "Descoberta Científica",
          description:
            "Explore as maravilhas da ciência através de experimentos práticos e descobertas emocionantes.",
        },
        {
          title: "Artes Cênicas",
          description:
            "Desenvolva confiança através de teatro, oratória e apresentações teatrais.",
        },
      ],
    },
  };

  const currentTranslations = activitiesTranslations[language];
  const visibleActivities = showAll
    ? currentTranslations.activities
    : currentTranslations.activities.slice(0, 4);

  const getIconComponent = (title: string): React.ReactElement => {
    const iconMap: Record<string, LucideIcon> = {
      "Martial Arts": Swords,
      "Music & Singing": Music,
      "Dance & Movement": Theater,
      "Creative Writing": Pencil,
      "Reading Adventure": Book,
      "Digital Skills": Monitor,
      "Visual Arts": Palette,
      "Physical Education": Dumbbell,
      "Language Skills": Languages,
      "Critical Thinking": Brain,
      "Science Discovery": Puzzle,
      "Performance Arts": Theater,
      // Portuguese mappings
      "Artes Marciais": Swords,
      "Música e Canto": Music,
      "Dança e Movimento": Theater,
      "Escrita Criativa": Pencil,
      "Aventura na Leitura": Book,
      "Habilidades Digitais": Monitor,
      "Artes Visuais": Palette,
      "Educação Física": Dumbbell,
      "Habilidades Linguísticas": Languages,
      "Pensamento Crítico": Brain,
      "Descoberta Científica": Puzzle,
      "Artes Cênicas": Theater,
    };

    const IconComponent = iconMap[title] || Puzzle;
    return <IconComponent className="w-12 h-12 text-blue-400" />;
  };

  return (
    <section className="bg-gradient-to-b from-blue-900 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">
            {currentTranslations.sectionTitle}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {currentTranslations.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleActivities.map((activity, index) => (
            <Card
              key={index}
              className={`transform hover:scale-105 transition-all duration-300 ${
                activity.highlight
                  ? "bg-gradient-to-br from-blue-600 text-white border-none"
                  : "bg-white/95 backdrop-blur-sm hover:shadow-xl"
              }`}
            >
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="mb-2 transform hover:rotate-6 transition-transform duration-300">
                  {getIconComponent(activity.title)}
                </div>
                <h3
                  className={`text-xl font-bold ${
                    activity.highlight ? "text-white" : "text-gray-800"
                  }`}
                >
                  {activity.title}
                </h3>
                <p
                  className={`${
                    activity.highlight ? "text-blue-100" : "text-gray-600"
                  } leading-relaxed`}
                >
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {currentTranslations.showMoreButton}
            </button>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-gray-300 max-w-2xl mx-auto">
            {currentTranslations.footerText}
          </p>
        </div>
      </div>
    </section>
  );
}
