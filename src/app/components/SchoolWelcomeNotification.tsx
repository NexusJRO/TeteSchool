"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Cloud, Moon, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

interface Announcement {
  id: number;
  title: string;
  description: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "School Play",
    description: "Don't miss our annual school play next Friday!",
  },
  {
    id: 2,
    title: "Science Fair",
    description: "Bring your projects for the Science Fair on Monday",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    description: "Join us for Parent-Teacher meetings this Thursday",
  },
];

export default function SchoolWelcomeNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const [greeting, setGreeting] = useState("");
  const [greetingIcon, setGreetingIcon] = useState<React.ReactNode>(null);

  useEffect(() => {
    // Show notification after a short delay
    const showTimer = setTimeout(() => setIsVisible(true), 1000);

    // Auto-close after 10 seconds
    const closeTimer = setTimeout(() => setIsVisible(false), 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  useEffect(() => {
    // Rotate through announcements every 7 seconds
    const interval = setInterval(() => {
      setCurrentAnnouncementIndex(
        (prevIndex) => (prevIndex + 1) % announcements.length
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Set greeting based on current time
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good morning");
        setGreetingIcon(<Sun className="mr-2" size={24} />);
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good afternoon");
        setGreetingIcon(<Cloud className="mr-2" size={24} />);
      } else {
        setGreeting("Good evening");
        setGreetingIcon(<Moon className="mr-2" size={24} />);
      }
    };

    updateGreeting();
    // Update greeting every minute
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  const currentAnnouncement = announcements[currentAnnouncementIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 z-50 hidden md:block" // Added hidden md:block here
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
                {greeting}, welcome to our school!
              </h2>
            </div>
            <p className="mb-4">
              We&apos;re excited to have you here. Check out our latest
              announcements:
            </p>
            <motion.div
              key={currentAnnouncement.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 rounded-md p-4 mb-4"
            >
              <div className="flex items-center mb-2">
                <BookOpen className="mr-2" size={20} />
                <h3 className="font-semibold text-lg">
                  {currentAnnouncement.title}
                </h3>
              </div>
              <p>{currentAnnouncement.description}</p>
            </motion.div>
            <button
              onClick={() => setIsVisible(false)}
              className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition-colors"
            >
              Got it!
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
