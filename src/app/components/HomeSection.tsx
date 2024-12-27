import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import SchoolWelcomeNotification from "./SchoolWelcomeNotification";

const BACKGROUND_IMAGES = [
  "/home/1.jpg",
  "/home/2.jpg",
  "/home/3.jpg",
  "/home/4.jpg",
  "/home/9.png",
  "/home/10.jpg",
];

// Posições fixas para evitar erro de hidratação
const STAR_POSITIONS = [
  { top: 15, left: 20, delay: 0.2 },
  { top: 25, left: 60, delay: 0.5 },
  { top: 45, left: 80, delay: 0.8 },
  { top: 65, left: 30, delay: 1.1 },
  { top: 75, left: 70, delay: 1.4 },
  { top: 85, left: 40, delay: 1.7 },
  { top: 35, left: 90, delay: 2.0 },
  { top: 55, left: 10, delay: 2.3 },
];

const DecorativeDoodles = () => (
  <>
    {/* Circles doodle top right */}
    <div className="absolute top-10 right-10 opacity-20 animate-pulse">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="10 5"
        />
        <circle
          cx="60"
          cy="60"
          r="35"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeDasharray="8 4"
        />
        <circle
          cx="60"
          cy="60"
          r="20"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="6 3"
        />
      </svg>
    </div>

    {/* Wavy lines left side */}
    <div className="absolute left-4 top-20 opacity-20">
      <svg width="80" height="200" viewBox="0 0 80 200" fill="none">
        <path
          d="M10 0C30 20 30 40 10 60C-10 80 -10 100 10 120C30 140 30 160 10 180"
          stroke="white"
          strokeWidth="2"
          className="animate-draw"
        />
        <path
          d="M30 0C50 20 50 40 30 60C10 80 10 100 30 120C50 140 50 160 30 180"
          stroke="#60A5FA"
          strokeWidth="2"
          className="animate-draw"
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M50 0C70 20 70 40 50 60C30 80 30 100 50 120C70 140 70 160 50 180"
          stroke="white"
          strokeWidth="2"
          className="animate-draw"
          style={{ animationDelay: "1s" }}
        />
      </svg>
    </div>

    {/* Stars/sparkles scattered */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STAR_POSITIONS.map((pos, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            animationDelay: `${pos.delay}s`,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z"
              fill="white"
              fillOpacity="0.2"
            />
          </svg>
        </div>
      ))}
    </div>
  </>
);

export default function Hero() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <SchoolWelcomeNotification />

      <main className="relative min-h-screen overflow-hidden">
        {/* Background Swiper */}
        <div className="fixed inset-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full"
          >
            {BACKGROUND_IMAGES.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-screen w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/95 to-zinc-800/75" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Decorative elements */}
        <DecorativeDoodles />

        {/* Content */}
        <div className="relative flex items-center min-h-screen">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl space-y-8">
              {/* Subtitle with decoration */}
              <div className="relative">
                <span className="bg-blue-500/20 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide inline-block relative z-10">
                  Transformative Education
                </span>
                <div className="absolute -bottom-2 -right-4 w-20 h-8 border-b-2 border-r-2 border-blue-400/20 rounded-br-lg" />
              </div>

              {/* Title with underline decoration */}
              {/*<h1 className="text-7xl font-bold tracking-tight relative">
                <span className="text-white">Welcome to</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent relative">
                  Tete Junior school
                  <svg
                    className="absolute -bottom-4 left-0 w-32 h-4 text-blue-400/40"
                    viewBox="0 0 100 10"
                  >
                    <path
                      d="M0 5C20 5, 20 9, 40 9C60 9, 60 5, 80 5C100 5, 100 9, 120 9"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>*/}

              <span className="text-blue-100/90 text-sm font-medium mb-2 block">
                Shaping tomorrow&apos;s leaders through innovative,
                technological, and humanized education to meet the challenges of
                the 21st century. Our mission is to inspire and empower the next
                generation.
              </span>

              {/* Buttons */}
              <div className="flex flex-row gap-6 pt-4">
                <Link href="/about" className="block group relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform" />
                  <Button className="relative bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                    Learn More
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/eventos" className="block group relative">
                  <div className="absolute inset-0 bg-white/5 rounded-lg transform -rotate-3 group-hover:-rotate-6 transition-transform" />
                  <Button
                    variant="outline"
                    className="relative text-white border-white/30 hover:border-white hover:bg-white text-lg px-4 md:px-6 py-6 transition-all duration-300 flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="hidden md:inline">Upcoming Events</span>
                    <span className="md:hidden">Events</span>
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 mt-12 mb-10 border-t border-white/10 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-400/40 rounded-full animate-ping" />
                </div>
                {[
                  { number: "15+", label: "Years of Excellence" },
                  { number: "1000+", label: "Graduates" },
                  { number: "98%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index} className="text-center relative group">
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300" />
                    <div className="relative">
                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-blue-200/80 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
