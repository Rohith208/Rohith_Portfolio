import React from "react";
import {
  BookOpen,
  Rocket,
  Heart,
  Star,
  Database,
  Smartphone,
} from "lucide-react";

const MyStory = () => {
  const storyTimeline = [
    {
      year: "2022",
      title: "Building the Foundation",
      description:
        "Strengthened core frontend fundamentals by learning HTML, CSS, and JavaScript, and began hands-on practice with React to build real UI projects.",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2023",
      title: "Enterprise Systems Exposure",
      description:
        "Worked with Oracle E-Business Suite (R12), developing PL/SQL reports, alerts, and data workflows across finance and procurement modules, gaining strong exposure to enterprise environments.",
      icon: Database,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2024",
      title: "Modern Web & Mobile Development",
      description:
        "Built production web applications using React and TypeScript and developed cross-platform mobile apps using Ionic React, integrating REST APIs and improving UI performance.",
      icon: Smartphone,
      color: "from-green-500 to-green-600",
    },
    {
      year: "2024",
      title: "Delivering Real-World Products",
      description:
        "Contributed to healthcare and e-commerce platforms, implementing complex UI workflows, authentication flows, and data-driven features in production environments.",
      icon: Rocket,
      color: "from-orange-500 to-orange-600",
    },
    {
      year: "2025",
      title: "Growing as a Product-Focused Developer",
      description:
        "Continuing to deepen expertise in React, cross-platform development, and full-stack integration, with a focus on building scalable and user-focused SaaS products.",
      icon: Star,
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            My Story<span className="text-blue-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            A journey of passion, learning, and growth in the world of frontend
            development, from humble beginnings to creating impactful digital
            solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-blue-400 transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {storyTimeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center gap-8 animate-fade-in-up`}
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                {/* Timeline Item */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "lg:pr-8 lg:text-right"
                      : "lg:pl-8 lg:text-left"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                    {/* Year Badge */}
                    <div
                      className={`inline-block bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}
                    >
                      {item.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up delay-1000">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-blue-100">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-blue-600 animate-pulse" />
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                Passion for Innovation
              </h3>
            </div>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Every project is an opportunity to learn, grow, and create
              something amazing.
              {` I'm`} excited to continue this journey and help bring your
              ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Star className="w-5 h-5" />
                <span>Ready to create something amazing together?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
