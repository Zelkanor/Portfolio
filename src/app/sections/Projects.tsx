"use client";

import { Sparkles, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { myProjects } from "@/constants";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Enhanced horizontal scroll effect
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const rect = container.getBoundingClientRect();

      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        e.preventDefault();
        const scrollAmount = e.deltaY * 2.5;
        container.scrollLeft += scrollAmount;

        updateActiveIndex();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const updateActiveIndex = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = 420; // Card width + gap
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), myProjects.length - 1));
  };

  const navigateToProject = (direction: "prev" | "next") => {
    let newIndex = activeIndex;
    if (direction === "prev") {
      newIndex = activeIndex > 0 ? activeIndex - 1 : myProjects.length - 1;
    } else {
      newIndex = activeIndex < myProjects.length - 1 ? activeIndex + 1 : 0;
    }

    jumpToProject(newIndex);
  };

  const jumpToProject = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 420; // Match the card width + gap
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
      id="projects"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gentle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink-500/2 rounded-full blur-3xl" />

        {/* Minimal particles */}
        <div className="absolute inset-0">
          {[
            { left: 15, top: 25, delay: 0 },
            { left: 85, top: 15, delay: 1 },
            { left: 25, top: 65, delay: 0.5 },
            { left: 75, top: 75, delay: 1.5 },
            { left: 45, top: 35, delay: 2 },
            { left: 65, top: 55, delay: 0.8 },
            { left: 5, top: 85, delay: 1.2 },
            { left: 95, top: 45, delay: 1.8 },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/10 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `fadeInOut ${4 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-20 px-4">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-purple-400 animate-spin" />
            <h2
              className={`text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Creative Works
            </h2>
            <Zap className="w-8 h-8 text-cyan-400 animate-bounce" />
          </div>
          <p
            className={`text-white/70 text-xl max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Journey through my digital playground where{" "}
            <span className="text-purple-300 font-semibold">innovation</span>{" "}
            meets <span className="text-cyan-300 font-semibold">artistry</span>
          </p>
        </div>

        {/* Projects Carousel Container */}
        <div
          className={`relative transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Projects Container */}
          <div className="px-20">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-8"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={updateActiveIndex}
            >
              {myProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  isActive={index === activeIndex}
                  onClick={() => jumpToProject(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <ProjectNavigation
          currentIndex={activeIndex}
          totalProjects={myProjects.length}
          onPrevious={() => navigateToProject("prev")}
          onNext={() => navigateToProject("next")}
          onSelect={jumpToProject}
          className="mt-12"
        />
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
