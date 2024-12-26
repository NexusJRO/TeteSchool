"use client";

import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import LearningActivities from "./components/SchoolAtivi";

export default function Home() {
  return (
    <div>
      <main>
        <HomeSection />
        <EducationSection />
        <LearningActivities />
      </main>
      <Footer />
    </div>
  );
}
