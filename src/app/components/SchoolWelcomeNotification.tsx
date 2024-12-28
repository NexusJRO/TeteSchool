"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Cloud, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const translations = {
  en: {
    welcomeMessage: "welcome to our platform!",
    excitementMessage: "We're excited to have you here!",
    gotIt: "Got it!",
    greetings: {
      morning: "Good morning",
      afternoon: "Good afternoon",
      evening: "Good evening",
    },
  },
  pt: {
    welcomeMessage: "bem-vindo(a) à nossa plataforma!",
    excitementMessage: "Estamos felizes em ter você aqui!",
    gotIt: "Entendi!",
    greetings: {
      morning: "Bom dia",
      afternoon: "Boa tarde",
      evening: "Boa noite",
    },
  },
};

export default function WelcomeNotification() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [greetingIcon, setGreetingIcon] = useState<React.ReactNode>(null);

  const t = translations[language];

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 1000);
    const closeTimer = setTimeout(() => setIsVisible(false), 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting(t.greetings.morning);
        setGreetingIcon(<Sun className="mr-2" size={24} />);
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting(t.greetings.afternoon);
        setGreetingIcon(<Cloud className="mr-2" size={24} />);
      } else {
        setGreeting(t.greetings.evening);
        setGreetingIcon(<Moon className="mr-2" size={24} />);
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, [t.greetings]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 z-50 hidden md:block"
        >
          <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <X size={20} />
            </button>
            <div className="flex items-center mb-4">
              {greetingIcon}
              <h2 className="text-xl font-bold">
                {greeting}, {t.welcomeMessage}
              </h2>
            </div>
            <p className="mb-4">{t.excitementMessage}</p>
            <button
              onClick={() => setIsVisible(false)}
              className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition-colors"
            >
              {t.gotIt}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
