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
} from "lucide-react";
import React, { useState } from "react";

export default function LearningActivities() {
  const [showAll, setShowAll] = useState(false);

  const activities = [
    {
      title: "Martial Arts",
      icon: <Swords className="w-12 h-12 text-blue-400" />,
      description:
        "Build confidence, discipline, and physical fitness through traditional martial arts training adapted for young learners.",
      highlight: true,
    },
    {
      title: "Music & Singing",
      icon: <Music className="w-12 h-12 text-blue-400" />,
      description:
        "Develop musical talent through choir, instrumental lessons, and fun singing activities that boost creativity and self-expression.",
    },
    {
      title: "Dance & Movement",
      icon: <Theater className="w-12 h-12 text-blue-400" />,
      description:
        "Express creativity through various dance styles, improving coordination, rhythm, and social skills in a joyful environment.",
    },
    {
      title: "Creative Writing",
      icon: <Pencil className="w-12 h-12 text-blue-400" />,
      description:
        "Foster imagination and communication skills through storytelling, poetry, and creative writing workshops.",
    },
    {
      title: "Reading Adventure",
      icon: <Book className="w-12 h-12 text-blue-400" />,
      description:
        "Journey through exciting stories and literature, building strong comprehension skills and a lifelong love for reading.",
      highlight: true,
    },
    {
      title: "Digital Skills",
      icon: <Monitor className="w-12 h-12 text-blue-400" />,
      description:
        "Learn essential technology skills through interactive games and age-appropriate coding activities.",
    },
    {
      title: "Visual Arts",
      icon: <Palette className="w-12 h-12 text-blue-400" />,
      description:
        "Explore painting, drawing, and crafts while developing fine motor skills and artistic expression.",
    },
    {
      title: "Physical Education",
      icon: <Dumbbell className="w-12 h-12 text-blue-400" />,
      description:
        "Stay active and healthy through sports, games, and activities that promote teamwork and motor skills.",
    },
    {
      title: "Language Skills",
      icon: <Languages className="w-12 h-12 text-blue-400" />,
      description:
        "Learn new languages through immersive activities, songs, and interactive games.",
      highlight: true,
    },
    {
      title: "Critical Thinking",
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      description:
        "Develop problem-solving abilities through engaging puzzles, games, and creative challenges.",
    },
    {
      title: "Science Discovery",
      icon: <Puzzle className="w-12 h-12 text-blue-400" />,
      description:
        "Explore the wonders of science through hands-on experiments and exciting discoveries.",
    },
    {
      title: "Performance Arts",
      icon: <Music className="w-12 h-12 text-blue-400" />,
      description:
        "Build confidence through drama, public speaking, and theatrical performances.",
    },
  ];

  const visibleActivities = showAll ? activities : activities.slice(0, 4);

  return (
    <section className="bg-gradient-to-b from-blue-900  py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">
            Learning Through Discovery
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive program helps children develop essential skills,
            discover their passions, and grow into confident learners through
            engaging activities and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleActivities.map((activity, index) => (
            <Card
              key={index}
              className={`transform hover:scale-105 transition-all duration-300 ${
                activity.highlight
                  ? "bg-gradient-to-br from-blue-600  text-white border-none"
                  : "bg-white/95 backdrop-blur-sm hover:shadow-xl"
              }`}
            >
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="mb-2 transform hover:rotate-6 transition-transform duration-300">
                  {activity.icon}
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
              Show More Activities
            </button>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Each activity is carefully designed to foster growth, creativity,
            and joy in learning while building essential life skills for your
            child&apos;s future.
          </p>
        </div>
      </div>
    </section>
  );
}
