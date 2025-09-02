"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
  selectedIndex: number;
  onProjectSelect: (index: number) => void;
  className?: string;
}

export function ProjectGrid({
  projects,
  selectedIndex,
  onProjectSelect,
  className = "",
}: ProjectGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {projects.map((project, index) => (
        <Card
          key={index}
          className={`group cursor-pointer transition-all duration-500 overflow-hidden border-0 bg-transparent ${
            index === selectedIndex
              ? "scale-105 shadow-2xl shadow-purple-500/20"
              : "hover:scale-102 hover:shadow-xl hover:shadow-white/10"
          }`}
          onClick={() => onProjectSelect(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CardContent className="p-0">
            {/* Video/Image Container */}
            <div className="relative h-64 overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10">
              {/* Video Background */}
              <div className="absolute inset-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={project.texture} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Row - Logo and Index */}
                <div className="flex justify-between items-start">
                  <div
                    className="p-3 rounded-xl backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:scale-110"
                    style={project.logoStyle}
                  >
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Badge>
                </div>

                {/* Bottom Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <div
                        key={tag.id}
                        className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm"
                      >
                        <Image
                          src={tag.path}
                          alt={tag.name}
                          width={16}
                          height={16}
                        />
                        <span className="text-xs text-white/80">
                          {tag.name}
                        </span>
                      </div>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="bg-white/10 backdrop-blur-sm text-xs"
                      >
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              {(hoveredIndex === index || index === selectedIndex) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 animate-pulse">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
