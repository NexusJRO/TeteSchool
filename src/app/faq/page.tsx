"use client";

import SchoolFAQ from "../components/SchoolFAQ";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const SchoolPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
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
            Frequently Asked Questions
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Find answers to the most common questions about our school.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-20">
        <SchoolFAQ />
      </div>
    </div>
  );
};

export default SchoolPage;
