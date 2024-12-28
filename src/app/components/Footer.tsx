import { useLanguage } from "@/app/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

export default function Footer() {
  const { language } = useLanguage();

  const footerTranslations = {
    en: {
      slogan:
        "Educating and empowering young minds to create a brighter future.",
      quickLinks: {
        title: "Quick Links",
        about: "About Us",
        contact: "Contact",
        gallery: "Gallery",
        faq: "FAQ",
      },
      contactUs: {
        title: "Contact Us",
        address: "Mozambique - Tete, Bairro Chingodzi",
        whatsappMessage:
          "Hello! I would like to know more information about the school.",
      },
      copyright: "© 2024 Nexus JR. All rights reserved.",
    },
    pt: {
      slogan:
        "Educando e capacitando mentes jovens para criar um futuro mais brilhante.",
      quickLinks: {
        title: "Links Rápidos",
        about: "Sobre Nós",
        contact: "Contato",
        gallery: "Galeria",
        faq: "Perguntas Frequentes",
      },
      contactUs: {
        title: "Contate-nos",
        address: "Moçambique - Tete, Bairro Chingodzi",
        whatsappMessage:
          "Olá! Gostaria de saber mais informações sobre a escola.",
      },
      copyright: "© 2024 Nexus JR. Todos os direitos reservados.",
    },
  };

  const currentTranslations = footerTranslations[language];

  // WhatsApp message configuration
  const phoneNumber = "258862124985";
  const message = currentTranslations.contactUs.whatsappMessage;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <footer className="text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* School Information */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/logo/1.png"
                alt="School Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              {currentTranslations.slogan}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">
              {currentTranslations.quickLinks.title}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/about"
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                  {currentTranslations.quickLinks.about}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                  {currentTranslations.quickLinks.contact}
                </a>
              </li>
              <li>
                <a
                  href="/galeria"
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                  {currentTranslations.quickLinks.gallery}
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                  {currentTranslations.quickLinks.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">
              {currentTranslations.contactUs.title}
            </h4>
            <div className="space-y-5">
              <a
                href="mailto:TJS@tetejuniorschool.com"
                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                <span>TJS@tetejuniorschool.com</span>
              </a>
              <a
                href="tel:+258862124985"
                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                <span>(+258) 86 212 4985</span>
              </a>
              <div className="flex items-center gap-3 text-blue-200">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{currentTranslations.contactUs.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media Links */}
            <div className="flex gap-8">
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                </svg>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.694-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.197-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-blue-200 text-sm">
              {currentTranslations.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
