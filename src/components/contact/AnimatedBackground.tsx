"use client";

import { useMemo } from "react";

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const AnimatedBackground = ({
  mousePosition,
}: AnimatedBackgroundProps) => {
  const radialStyle = useMemo(
    () => ({
      background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.04), transparent 70%)`,
    }),
    [mousePosition]
  );

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden ">
      {/* Subtle static gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.03),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.03),transparent_70%)]" />

      {/* Mouse following gradient - very subtle */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={radialStyle}
      />

      {/* Floating orbs - much more subtle */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-purple-500/[0.02] rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 bg-cyan-500/[0.02] rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-3/4 left-3/4 h-64 w-64 bg-pink-500/[0.02] rounded-full blur-3xl animate-pulse delay-500" />

      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20" />
    </div>
  );
};

export default AnimatedBackground;
