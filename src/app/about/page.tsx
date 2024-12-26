"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Star, Trophy, Globe } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Sobre() {
  const router = useRouter();

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
      {/* Hero Section */}
      {/* Banner Hero Section */}
      <div className="relative h-64">
        <div className="absolute inset-0 "></div>
        <img
          src="/banner/25.png"
          alt="FAQ Banner"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Discover our mission, vision, and values that drive our commitment
            to educational excellence and innovation.
          </p>
        </div>
      </div>

      {/* Main Content Section with Tabs */}
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
                  <TabsTrigger
                    value="about"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-3 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-medium text-white">About</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="mission"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-3 transition-all duration-300 "
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-medium text-white">Mission</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="vision"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-3 transition-all duration-300 "
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-medium text-white">Vision</span>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="p-8 py-2">
                <TabsContent value="about" className="mt-3">
                  <motion.div
                    variants={cardVariants}
                    className="space-y-6 max-w-4xl mx-auto"
                  >
                    <p className="text-gray-700  text-justify leading-relaxed">
                      Tete Junior School is a distinguished educational
                      institution dedicated to fostering excellence in learning
                      and nurturing holistic development. We are proudly
                      certified to deliver both international and national
                      curricula, combining global standards with local
                      relevance.
                    </p>
                    <p className="text-gray-700  text-justify leading-relaxed">
                      Our mission is to empower students to achieve their
                      fullest potential by tailoring learning experiences to
                      their unique needs, interests, and abilities. We cultivate
                      an inspiring and inclusive environment where students
                      develop academically, socially, emotionally, and
                      ethically.
                    </p>
                  </motion.div>
                </TabsContent>

                <TabsContent value="mission" className="mt-6">
                  <motion.div className="space-y-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                      <h3 className="text-xl font-bold text-gray-800">
                        Our Mission
                      </h3>
                    </div>
                    <p className="text-gray-700 text-justify leading-relaxed">
                      Providing high-quality education that fosters critical
                      thinking, creativity, and social responsibility through
                      innovative teaching methods and high academic standards.
                    </p>
                    <div className="mt-8 bg-blue-50 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-blue-800 mb-4">
                        Key Objectives
                      </h4>
                      <ul className="space-y-4 ">
                        {[
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
                        ].map((value, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-700  bg-white p-4 rounded-lg shadow-sm "
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
                        Our Vision
                      </h3>
                    </div>
                    <div className=" p-1 rounded-xl">
                      <p className="text-gray-700  leading-relaxed">
                        To be a leader in pedagogical innovation, promoting an
                        inclusive and inspiring educational environment where
                        all students can thrive.
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
