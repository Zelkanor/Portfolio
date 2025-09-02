"use client";

import { useEffect, useRef, useState } from "react";

import { AboutTabContent } from "@/components/about/AboutTabContent";
import { AnimatedBackground } from "@/components/about/AnimatedBackground";
import { ExperienceTabContent } from "@/components/about/ExperienceTabContent";
import { SectionHeader } from "@/components/about/SectionHeader";
import { SkillsTabContent } from "@/components/about/SkillsTabContent";
import { TabNavigation } from "@/components/about/TabNavigation";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-center justify-center relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="about"
    >
      <AnimatedBackground mousePosition={mousePosition} />

      {/* Main container */}
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeader
          isVisible={isVisible}
          title="About Me"
          subtitle="Passionate developer crafting digital experiences that bridge creativity and technology"
        />

        <TabNavigation
          isVisible={isVisible}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        >
          <AboutTabContent />
          <ExperienceTabContent />
          <SkillsTabContent />
        </TabNavigation>
      </div>
    </section>
  );
};

export default About;
