"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/galeria" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Container */}
          <div className="flex-shrink-0 h-full py-2">
            <div className="relative h-full aspect-[1.55]">
              <Image
                src="/logo/1.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isScrolled
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className={`inline-flex items-center justify-center p-2 rounded-md 
                    ${
                      isScrolled
                        ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        : "text-white hover:text-gray-200 hover:bg-white/10"
                    }
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
                  aria-label="Open navigation menu"
                >
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-white">
                <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100">
                  <span className="sr-only">Close</span>
                </SheetClose>
                <SheetTitle className="text-gray-900 mt-6">
                  Navigation Menu
                </SheetTitle>
                <SheetDescription className="text-gray-600">
                  Access all sections of our site
                </SheetDescription>

                <nav
                  className="flex flex-col space-y-4 mt-8"
                  aria-label="Mobile navigation"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
