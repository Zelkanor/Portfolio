"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  achievements: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-100 mb-8 sm:mb-12">
        Academic Journey
      </h3>

      <div className="relative px-4 sm:px-0">
        {/* Timeline line - hidden on mobile, shown on larger screens */}
        <div
          className="hidden sm:block absolute left-6 md:left-8 top-0 bottom-0 w-0.5 opacity-30"
          style={{
            background:
              "linear-gradient(180deg, #434343 0%, #000000 50%, #434343 100%)",
          }}
        />

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Mobile layout - stacked */}
              <div className="sm:hidden">
                <Card
                  className="p-4 backdrop-blur-sm border border-gray-700/30 transition-all duration-500 hover:border-gray-600/50"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.8) 100%)",
                  }}
                >
                  <CardContent className="p-0 space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-100">
                        {exp.title}
                      </h4>
                      <div className="flex flex-col gap-1 mt-2">
                        <span className="text-sm text-gray-300">
                          {exp.company}
                        </span>
                        <Badge
                          variant="outline"
                          className="text-blue-400 border-blue-400/30 w-fit text-xs"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="text-sm font-semibold text-gray-300 mb-2">
                        Key Achievements
                      </h5>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((achievement, achieveIndex) => (
                          <li
                            key={achieveIndex}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Desktop layout - timeline */}
              <div className="hidden sm:flex gap-6 md:gap-8">
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, #000000 0%, #434343 100%)",
                      boxShadow: "0 0 20px rgba(0,0,0,0.8)",
                    }}
                  >
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full animate-pulse" />
                  </div>

                  {/* Connecting line glow */}
                  <div
                    className="absolute top-12 md:top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-6 md:h-8 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(180deg, #434343 0%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Content card */}
                <div className="flex-1">
                  <Card
                    className="p-4 md:p-8 backdrop-blur-sm border border-gray-700/30 transition-all duration-500 group-hover:border-gray-600/50 group-hover:translate-x-2"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.8) 100%)",
                    }}
                  >
                    <CardContent className="p-0 space-y-4 md:space-y-6">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-100">
                          {exp.title}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                          <span className="text-gray-300">{exp.company}</span>
                          <Badge
                            variant="outline"
                            className="text-blue-400 border-blue-400/30 w-fit"
                          >
                            {exp.period}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {exp.description}
                      </p>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-3">
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achieveIndex) => (
                            <li
                              key={achieveIndex}
                              className="flex items-start gap-3 text-gray-400 text-sm md:text-base"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-shrink-0" />
                              <span className="leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
