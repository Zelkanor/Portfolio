"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/types/project";

interface ProjectDetailsProps {
  project: Project;
  className?: string;
}

export function ProjectDetails({
  project,
  className = "",
}: ProjectDetailsProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      className={`bg-white/5 backdrop-blur-xl border border-white/10 ${className}`}
    >
      <CardContent className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div
            className="p-4 rounded-2xl backdrop-blur-md border border-white/20"
            style={project.logoStyle}
          >
            <Image
              src={project.logo}
              alt={project.title}
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
              asChild
            >
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
              asChild
            >
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden bg-black/40">
          <Image
            src={project.spotlight}
            alt={project.title}
            width={600}
            height={400}
            className={`w-full h-64 object-cover transition-all duration-700 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {project.title}
            </h2>
            <p className="text-white/80 leading-relaxed text-lg">
              {project.desc}
            </p>
          </div>

          <p className="text-white/60 leading-relaxed">{project.subdesc}</p>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-white/90 font-semibold text-sm uppercase tracking-wider">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <Badge
                  key={tag.id}
                  variant="secondary"
                  className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Image
                    src={tag.path}
                    alt={tag.name}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-white/90">{tag.name}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
