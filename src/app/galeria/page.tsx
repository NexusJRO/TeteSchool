"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand, Folder, ChevronLeft, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface ImageType {
  src: string;
  alt: string;
}

interface FolderType {
  name: string;
  description: string;
  images: ImageType[];
}

type TranslationType = {
  backToHome: string;
  galleryTitle: string;
  galleryDescription: string;
  back: string;
  photos: string;
  folders: Record<string, FolderType>;
};

type TranslationsType = {
  en: TranslationType;
  pt: TranslationType;
};

const translations: TranslationsType = {
  en: {
    backToHome: "Back to home",
    galleryTitle: "School Memories Gallery",
    galleryDescription:
      "Journey through our school's most cherished moments and achievements",
    back: "Back",
    photos: "photos",
    folders: {
      classrooms: {
        name: "Learning Spaces",
        description:
          "Explore our vibrant classrooms and engaging learning environments",
        images: [
          { src: "/galeria/salas/1.jpg", alt: "Science Fair Exhibition" },
          { src: "/galeria/salas/2.jpg", alt: "Theater Performance" },
          { src: "/galeria/salas/3.jpg", alt: "Music Festival" },
          { src: "/galeria/salas/4.jpg", alt: "Interactive Science Projects" },
          { src: "/galeria/salas/6.jpg", alt: "Student Orchestra Performance" },
          { src: "/galeria/salas/7.jpg", alt: "Drama Class Presentation" },
          { src: "/galeria/salas/8.jpg", alt: "Choir Performance" },
          { src: "/galeria/salas/9.jpg", alt: "STEM Project Showcase" },
          { src: "/galeria/salas/10.jpg", alt: "Annual School Play" },
          { src: "/galeria/salas/11.jpg", alt: "Musical Showcase" },
          { src: "/galeria/salas/12.jpg", alt: "Creative Arts Display" },
        ],
      },
      graduation: {
        name: "Graduation Ceremonies",
        description: "Celebrating academic excellence and student achievements",
        images: [
          { src: "/galeria/graduacao/1.jpg", alt: "Graduation Ceremony" },
          { src: "/galeria/graduacao/2.jpg", alt: "Diploma Presentation" },
          { src: "/galeria/graduacao/3.jpg", alt: "Class of 2024 Group Photo" },
          { src: "/galeria/graduacao/4.jpg", alt: "Commencement Speech" },
          { src: "/galeria/graduacao/5.jpg", alt: "Honor Roll Recognition" },
          { src: "/galeria/graduacao/6.jpg", alt: "Graduate Celebrations" },
          { src: "/galeria/graduacao/7.jpg", alt: "Family Photos" },
          { src: "/galeria/graduacao/8.jpg", alt: "Academic Awards" },
          { src: "/galeria/graduacao/9.jpg", alt: "Farewell Ceremony" },
          { src: "/galeria/graduacao/10.jpg", alt: "Graduation Procession" },
          { src: "/galeria/graduacao/11.jpg", alt: "Principal's Address" },
          { src: "/galeria/graduacao/12.jpg", alt: "Celebration Moment" },
        ],
      },
      events: {
        name: "Special Events",
        description:
          "Memorable moments from our school events and celebrations",
        images: [
          { src: "/galeria/eventos/1.jpg", alt: "Annual Science Fair" },
          { src: "/galeria/eventos/2.jpg", alt: "School Theater Production" },
          { src: "/galeria/eventos/3.jpg", alt: "Spring Music Festival" },
          { src: "/galeria/eventos/4.jpg", alt: "Innovation Exhibition" },
          { src: "/galeria/eventos/5.jpg", alt: "Cultural Performance" },
          { src: "/galeria/eventos/6.jpg", alt: "Talent Show" },
          { src: "/galeria/eventos/7.jpg", alt: "Art Exhibition" },
          { src: "/galeria/eventos/8.jpg", alt: "School Concert" },
        ],
      },
      campus: {
        name: "Campus Life",
        description: "Experience our beautiful campus and facilities",
        images: [
          { src: "/galeria/patio/1.jpg", alt: "Main Courtyard" },
          { src: "/galeria/patio/2.jpg", alt: "Sports Field" },
          { src: "/galeria/patio/3.jpg", alt: "Library Entrance" },
          { src: "/galeria/patio/4.jpg", alt: "Student Commons" },
          { src: "/galeria/patio/5.jpg", alt: "Garden Area" },
          { src: "/galeria/patio/6.jpg", alt: "Outdoor Learning Space" },
          { src: "/galeria/patio/7.jpg", alt: "Campus Overview" },
          { src: "/galeria/patio/8.jpg", alt: "Recreation Area" },
        ],
      },
      recreation: {
        name: "Student Life",
        description: "Capturing joy and friendship in everyday moments",
        images: [
          { src: "/galeria/diversao/1.jpg", alt: "Sports Activities" },
          { src: "/galeria/diversao/2.jpg", alt: "Friend Groups" },
          { src: "/galeria/diversao/3.jpg", alt: "Outdoor Games" },
          { src: "/galeria/diversao/4.jpg", alt: "Break Time Fun" },
          { src: "/galeria/diversao/5.jpg", alt: "Student Activities" },
        ],
      },
    },
  },
  pt: {
    backToHome: "Voltar para página inicial",
    galleryTitle: "Galeria de Memórias Escolares",
    galleryDescription:
      "Viaje através dos momentos e conquistas mais preciosos de nossa escola",
    back: "Voltar",
    photos: "fotos",
    folders: {
      classrooms: {
        name: "Espaços de Aprendizagem",
        description:
          "Explore nossas salas de aula vibrantes e ambientes de aprendizagem envolventes",
        images: [
          {
            src: "/galeria/salas/1.jpg",
            alt: "Exposição da Feira de Ciências",
          },
          { src: "/galeria/salas/2.jpg", alt: "Apresentação de Teatro" },
          { src: "/galeria/salas/3.jpg", alt: "Festival de Música" },
          {
            src: "/galeria/salas/4.jpg",
            alt: "Projetos Interativos de Ciências",
          },
          {
            src: "/galeria/salas/6.jpg",
            alt: "Apresentação da Orquestra Estudantil",
          },
          {
            src: "/galeria/salas/7.jpg",
            alt: "Apresentação da Aula de Teatro",
          },
          { src: "/galeria/salas/8.jpg", alt: "Apresentação do Coral" },
          { src: "/galeria/salas/9.jpg", alt: "Mostra de Projetos STEM" },
          { src: "/galeria/salas/10.jpg", alt: "Peça Teatral Anual" },
          { src: "/galeria/salas/11.jpg", alt: "Mostra Musical" },
          { src: "/galeria/salas/12.jpg", alt: "Exposição de Artes Criativas" },
        ],
      },
      graduation: {
        name: "Cerimônias de Formatura",
        description:
          "Celebrando a excelência acadêmica e as conquistas dos alunos",
        images: [
          { src: "/galeria/graduacao/1.jpg", alt: "Cerimônia de Formatura" },
          { src: "/galeria/graduacao/2.jpg", alt: "Entrega de Diploma" },
          { src: "/galeria/graduacao/3.jpg", alt: "Foto da Turma de 2024" },
          { src: "/galeria/graduacao/4.jpg", alt: "Discurso de Formatura" },
          {
            src: "/galeria/graduacao/5.jpg",
            alt: "Reconhecimento do Quadro de Honra",
          },
          { src: "/galeria/graduacao/6.jpg", alt: "Celebrações dos Formandos" },
          { src: "/galeria/graduacao/7.jpg", alt: "Fotos em Família" },
          { src: "/galeria/graduacao/8.jpg", alt: "Prêmios Acadêmicos" },
          { src: "/galeria/graduacao/9.jpg", alt: "Cerimônia de Despedida" },
          { src: "/galeria/graduacao/10.jpg", alt: "Procissão de Formatura" },
          { src: "/galeria/graduacao/11.jpg", alt: "Discurso do Diretor" },
          { src: "/galeria/graduacao/12.jpg", alt: "Momento de Celebração" },
        ],
      },
      events: {
        name: "Eventos Especiais",
        description:
          "Momentos memoráveis dos eventos e celebrações de nossa escola",
        images: [
          { src: "/galeria/eventos/1.jpg", alt: "Feira de Ciências Anual" },
          { src: "/galeria/eventos/2.jpg", alt: "Produção Teatral da Escola" },
          {
            src: "/galeria/eventos/3.jpg",
            alt: "Festival de Música da Primavera",
          },
          { src: "/galeria/eventos/4.jpg", alt: "Exposição de Inovação" },
          { src: "/galeria/eventos/5.jpg", alt: "Apresentação Cultural" },
          { src: "/galeria/eventos/6.jpg", alt: "Show de Talentos" },
          { src: "/galeria/eventos/7.jpg", alt: "Exposição de Arte" },
          { src: "/galeria/eventos/8.jpg", alt: "Concerto da Escola" },
        ],
      },
      campus: {
        name: "Vida no Campus",
        description: "Conheça nosso belo campus e instalações",
        images: [
          { src: "/galeria/patio/1.jpg", alt: "Pátio Principal" },
          { src: "/galeria/patio/2.jpg", alt: "Campo de Esportes" },
          { src: "/galeria/patio/3.jpg", alt: "Entrada da Biblioteca" },
          { src: "/galeria/patio/4.jpg", alt: "Área Comum dos Estudantes" },
          { src: "/galeria/patio/5.jpg", alt: "Área do Jardim" },
          {
            src: "/galeria/patio/6.jpg",
            alt: "Espaço de Aprendizagem ao Ar Livre",
          },
          { src: "/galeria/patio/7.jpg", alt: "Vista Geral do Campus" },
          { src: "/galeria/patio/8.jpg", alt: "Área de Recreação" },
        ],
      },
      recreation: {
        name: "Vida Estudantil",
        description: "Capturando alegria e amizade nos momentos do dia a dia",
        images: [
          { src: "/galeria/diversao/1.jpg", alt: "Atividades Esportivas" },
          { src: "/galeria/diversao/2.jpg", alt: "Grupos de Amigos" },
          { src: "/galeria/diversao/3.jpg", alt: "Jogos ao Ar Livre" },
          { src: "/galeria/diversao/4.jpg", alt: "Diversão no Intervalo" },
          { src: "/galeria/diversao/5.jpg", alt: "Atividades Estudantis" },
        ],
      },
    },
  },
};

const GalleryWithFolders = () => {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);

  const openImageModal = (image: ImageType) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const openFolder = (folderKey: string) => {
    setCurrentFolder(folderKey);
  };

  const closeFolder = () => {
    setCurrentFolder(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64">
        <div className="absolute inset-0"></div>
        <img
          src="/banner/25.png"
          alt="Gallery Banner"
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
            {t.galleryTitle}
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            {t.galleryDescription}
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl py-9">
        <AnimatePresence mode="wait">
          {!currentFolder ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {Object.entries(t.folders).map(([key, folder]) => (
                <Card
                  key={key}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => openFolder(key)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Folder className="w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors" />
                      <div>
                        <h3 className="text-xl font-semibold">{folder.name}</h3>
                        <p className="text-sm text-gray-500">
                          {folder.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      {folder.images.length} {t.photos}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  onClick={closeFolder}
                >
                  <ChevronLeft className="w-4 h-4" />
                  {t.back}
                </Button>
                <h3 className="text-2xl font-semibold">
                  {t.folders[currentFolder].name}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {t.folders[currentFolder].images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openImageModal(image)}
                  >
                    <div className="relative aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <Expand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImageModal}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  className="absolute -top-12 right-0 text-white hover:text-gray-300"
                  onClick={closeImageModal}
                >
                  <X className="w-6 h-6" />
                </Button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
                <p className="text-center text-white mt-4 text-lg">
                  {selectedImage.alt}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryWithFolders;
