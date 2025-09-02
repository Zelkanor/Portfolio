import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ProjectNavigationProps {
  currentIndex: number;
  totalProjects: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  className?: string;
}

export function ProjectNavigation({
  currentIndex,
  totalProjects,
  onPrevious,
  onNext,
  onSelect,
  className = "",
}: ProjectNavigationProps) {
  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      {/* Previous Button */}
      <Button
        variant="outline"
        size="icon"
        className="bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
        onClick={onPrevious}
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform duration-300" />
      </Button>

      {/* Dots Navigation */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalProjects }, (_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 shadow-lg shadow-purple-400/30"
                : "w-3 h-3 bg-white/20 hover:bg-white/40 hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="icon"
        className="bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
        onClick={onNext}
      >
        <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
      </Button>

      {/* Counter */}
      <div className="ml-4 text-white/60 text-sm font-mono">
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(totalProjects).padStart(2, "0")}
      </div>
    </div>
  );
}
