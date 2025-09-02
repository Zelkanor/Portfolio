import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export function ProfileSection() {
  const tags = ["Student Developer", "Problem Solver", "Tech Enthusiast"];

  // Predefined positions for floating particles to avoid hydration issues
  const particlePositions = [
    { top: 20, left: 80 },
    { top: 35, left: 15 },
    { top: 65, left: 85 },
    { top: 80, left: 25 },
    { top: 15, left: 60 },
    { top: 70, left: 55 },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
      <div className="relative group">
        <div className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl overflow-hidden relative group">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
            }}
          />
          <div className="absolute inset-1.5 sm:inset-2 rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/assets/grid1.png"
              alt="Profile"
              width={256}
              height={256}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 opacity-60" />
          </div>
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-gray-700/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Animated border on hover */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 animate-pulse" />
          </div>

          {/* Floating particles around image - hidden on small screens */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none hidden sm:block">
            {particlePositions.map((position, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-float"
                style={{
                  top: `${position.top}%`,
                  left: `${position.left}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-100">
          Nikhil Krishna
        </h3>
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-300 border-gray-700/40 backdrop-blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(20,20,20,0.6) 100%)",
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
