"use client";

import { TabsContent } from "@/components/ui/tabs";

import { ExperienceTimeline } from "./ExperienceTimeline";

const experiences = [
  {
    title: "Computer Science Student",
    company: "University",
    period: "2022 - Present (Pre-final Year)",
    description:
      "Currently pursuing my Bachelor's degree in Computer Science with a focus on software development, algorithms, and modern web technologies while maintaining strong academic performance and actively participating in tech communities.",
    achievements: [
      "Maintained 3.8+ GPA throughout the program with consistent academic excellence",
      "Successfully completed 15+ software development projects using modern frameworks",
      "Active member of programming clubs and tech communities",
      "Participated in multiple hackathons and coding competitions",
      "Led team projects demonstrating leadership and collaboration skills",
    ],
  },
];

export function ExperienceTabContent() {
  return (
    <TabsContent value="experience" className="mt-0">
      <ExperienceTimeline experiences={experiences} />
    </TabsContent>
  );
}
