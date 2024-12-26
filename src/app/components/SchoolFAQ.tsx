import { Card } from "@/components/ui/card";
import { ChevronDown, Search } from "lucide-react";
import React, { useState, useMemo } from "react";

const FAQS = [
  {
    question: "What ages do you accept?",
    answer:
      "We welcome children from 3 to 6 years old, providing a nurturing early learning environment tailored to their developmental stages.",
    category: "Admissions",
  },
  {
    question: "What are your school hours?",
    answer:
      "Our school operates from 8:00 AM to 3:30 PM, with optional early drop-off from 7:00 AM and after-school programs until 6:00 PM to accommodate working parents.",
    category: "Schedule",
  },
  {
    question: "Do you provide meals?",
    answer:
      "Yes! We offer nutritious, balanced meals prepared fresh daily by our in-house chef. All meals follow dietary guidelines and we can accommodate special dietary requirements and allergies.",
    category: "Daily Care",
  },
  {
    question: "How do you ensure child safety?",
    answer:
      "Child safety is our top priority. We maintain strict security protocols including biometric access control, CCTV monitoring, background-checked staff, secured premises, and constant supervision. All staff are trained in first aid and emergency procedures.",
    category: "Safety",
  },
  {
    question: "What educational approach do you use?",
    answer:
      "We blend play-based learning with structured activities, focusing on holistic development through creativity, exploration, and fun. Our curriculum incorporates elements of Montessori, Reggio Emilia, and traditional teaching methods.",
    category: "Education",
  },
  {
    question: "How can parents stay involved?",
    answer:
      "We encourage parent participation through our dedicated parent portal app, regular updates, monthly parent-teacher meetings, volunteering opportunities, and interactive school events. Parents can also join our Parent Advisory Committee.",
    category: "Parent Engagement",
  },
] as const;

const SchoolFAQ = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredAndGroupedFAQs = useMemo(() => {
    const searchTerm = searchQuery.toLowerCase();
    const filtered = FAQS.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm) ||
        faq.category.toLowerCase().includes(searchTerm)
    );

    return filtered.reduce<Record<string, typeof filtered>>((acc, faq) => {
      if (!acc[faq.category]) {
        acc[faq.category] = [];
      }
      acc[faq.category].push(faq);
      return acc;
    }, {});
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto py-14 px-4">
      <div className="mb-12">
        <div className="relative max-w-xl mx-auto">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(filteredAndGroupedFAQs).map(
          ([category, categoryFaqs]) => (
            <div key={category} className="flex flex-col h-full">
              <Card className="h-full flex flex-col bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 bg-blue-200">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category}
                  </h3>
                </div>
                <div className="flex-1 divide-y divide-gray-100">
                  {categoryFaqs.map((faq) => {
                    const globalIndex = FAQS.findIndex(
                      (f) => f.question === faq.question
                    );
                    const isActive = activeIndices.includes(globalIndex);

                    return (
                      <div key={faq.question} className="relative">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                          aria-expanded={isActive}
                        >
                          <h4 className="text-base font-medium text-gray-700 pr-8">
                            {faq.question}
                          </h4>
                          <ChevronDown
                            className={`absolute right-4 top-5 text-gray-400 transition-transform duration-200 ${
                              isActive ? "rotate-180" : ""
                            }`}
                            size={18}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            isActive ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <p className="p-4 text-gray-600 text-sm bg-gray-50">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          )
        )}
      </div>

      {Object.keys(filteredAndGroupedFAQs).length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No questions found matching your search. Try different keywords.
          </p>
        </div>
      )}
    </div>
  );
};

export default SchoolFAQ;
