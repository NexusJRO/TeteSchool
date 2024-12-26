import { Card, CardContent } from "@/components/ui/card";
import { Building2, BookOpen, GraduationCap, Users } from "lucide-react";

export default function EducationSection() {
  const features = [
    {
      title: "Modern Library",
      icon: <Building2 className="w-12 h-12 text-blue-400" />,
      description:
        "A warm and welcoming space filled with carefully curated books, educational materials, and interactive learning resources for young minds.",
    },
    {
      title: "Experienced Teachers",
      icon: <BookOpen className="w-12 h-12 text-blue-400" />,
      description:
        "Our passionate educators bring years of experience in early childhood development, ensuring every child receives personalized attention and guidance.",
    },
    {
      title: "Creative Learning",
      icon: <GraduationCap className="w-12 h-12 text-blue-400" />,
      description:
        "Engaging activities and hands-on projects that make learning fun and memorable while developing essential skills for the future.",
      highlight: true,
    },
    {
      title: "Diverse Programs",
      icon: <Users className="w-12 h-12 text-blue-400" />,
      description:
        "From arts and music to science and sports, we offer a wide range of programs designed to nurture every child's unique talents and interests.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-900 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">
            Nurturing Young Minds
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We believe every child is unique and deserves an education that
            sparks curiosity, builds confidence, and creates a lifelong love for
            learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${
                feature.highlight
                  ? " "
                  : "bg-white hover:shadow-lg transition-shadow duration-300"
              }`}
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3
                  className={`text-xl font-bold mb-4 ${
                    feature.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={
                    feature.highlight ? "text-gray-100" : "text-gray-500"
                  }
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
