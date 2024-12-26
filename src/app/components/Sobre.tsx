"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  Eye,
  Heart,
  Star,
  Trophy,
  Lightbulb,
  Globe,
} from "lucide-react";
import React from "react";

export default function Sobre() {
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
    <section
      id="sobre"
      className="bg-gradient-to-br from-purple-50 to-white py-16 px-4"
    >
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* História Section */}
          <motion.div
            variants={cardVariants}
            className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-12 h-12 text-blue-700 mr-4" />
                <h2 className="text-4xl font-bold text-blue-700">
                  Nossa História
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Fundada em 2010, a Escola Tete Junior nasceu com uma missão
                revolucionária: transformar a educação infantil em uma jornada
                de descobertas, criatividade e crescimento pessoal.
              </p>
            </div>
          </motion.div>

          {/* Right Side Sections */}
          <div className="space-y-8">
            {/* Missão */}
            <motion.div
              variants={cardVariants}
              className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-blue-700 mr-4" />
                  <h3 className="text-3xl font-semibold text-blue-700">
                    Missão
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Criar um ambiente de aprendizado transformador, onde cada
                  criança é inspirada a explorar, questionar e desenvolver todo
                  seu potencial único.
                </p>
              </div>
            </motion.div>

            {/* Visão */}
            <motion.div
              variants={cardVariants}
              className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-10 h-10 text-blue-700 mr-4" />
                  <h3 className="text-3xl font-semibold text-blue-700">
                    Visão
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ser reconhecida nacionalmente como uma instituição de
                  excelência em educação infantil, formando cidadãos criativos,
                  éticos e preparados para os desafios do futuro.
                </p>
              </div>
            </motion.div>

            {/* Valores */}
            <motion.div
              variants={cardVariants}
              className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="w-10 h-10 text-blue-700 mr-4" />
                  <h3 className="text-3xl font-semibold text-blue-700">
                    Valores
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: Star, text: "Excelência educacional" },
                    { icon: Globe, text: "Inclusão e diversidade" },
                    { icon: Lightbulb, text: "Inovação pedagógica" },
                    { icon: Trophy, text: "Desenvolvimento integral" },
                  ].map((value, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 text-lg"
                    >
                      <value.icon className="w-6 h-6 mr-3 text-blue-500" />
                      {value.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
