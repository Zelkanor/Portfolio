import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  desc: string;
  subdesc: string;
  href: string;
  texture: string;
  logo: string;
  logoStyle: Record<string, string | undefined>;
  spotlight: string;
  tags: Array<{
    id: number;
    name: string;
    path: string;
  }>;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function ProjectCard({ project, isActive, onClick }: ProjectCardProps) {
  return (
    <Card
      className={`flex-shrink-0 w-96 group cursor-pointer transition-all duration-500 overflow-hidden border-0 bg-white/5 backdrop-blur-3xl relative ${
        isActive
          ? "scale-105 shadow-2xl shadow-purple-500/20"
          : "hover:scale-102 hover:shadow-xl hover:shadow-white/10"
      }`}
      onClick={onClick}
      style={{
        background: isActive
          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)"
          : "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 100%)",
        border: isActive
          ? "1px solid rgba(147, 51, 234, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <CardContent className="p-0 h-full relative overflow-hidden">
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={project.spotlight}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
          />

          {/* Glassy overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Floating Logo */}
          <div className="absolute top-6 left-6">
            <div
              className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-black/20"
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
          </div>

          {/* Interactive Action Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50 backdrop-blur-md">
            <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/30 hover:bg-white/20 text-white backdrop-blur-sm hover:scale-110 transition-all duration-300"
                asChild
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                asChild
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Launch
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4 relative">
          {/* Title */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
              {project.desc}
            </p>
          </div>

          {/* Organized Tech Stack with Tooltips */}
          <div className="space-y-2">
            {/* Frontend Row */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags
                .filter((tag) =>
                  [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "Tailwind",
                    "Vue",
                    "Angular",
                  ].includes(tag.name)
                )
                .slice(0, 4)
                .map((tag) => (
                  <div
                    key={tag.id}
                    className="relative group/tooltip p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src={tag.path}
                      alt={tag.name}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                      {tag.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-2 border-transparent border-t-black/90"></div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Backend Row */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags
                .filter((tag) =>
                  [
                    "Node.js",
                    "Python",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "Firebase",
                    "Supabase",
                  ].includes(tag.name)
                )
                .slice(0, 4)
                .map((tag) => (
                  <div
                    key={tag.id}
                    className="relative group/tooltip p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src={tag.path}
                      alt={tag.name}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                      {tag.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-2 border-transparent border-t-black/90"></div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Misc Row */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags
                .filter(
                  (tag) =>
                    ![
                      "React",
                      "Next.js",
                      "TypeScript",
                      "JavaScript",
                      "HTML",
                      "CSS",
                      "Tailwind",
                      "Vue",
                      "Angular",
                      "Node.js",
                      "Python",
                      "Express",
                      "MongoDB",
                      "PostgreSQL",
                      "MySQL",
                      "Firebase",
                      "Supabase",
                    ].includes(tag.name)
                )
                .slice(0, 4)
                .map((tag) => (
                  <div
                    key={tag.id}
                    className="relative group/tooltip p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src={tag.path}
                      alt={tag.name}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                      {tag.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-2 border-transparent border-t-black/90"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
