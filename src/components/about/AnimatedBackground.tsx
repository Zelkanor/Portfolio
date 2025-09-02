"use client";

import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

export function AnimatedBackground({ mousePosition }: AnimatedBackgroundProps) {
  const [isClient, setIsClient] = useState(false);
  const [floatingShapes, setFloatingShapes] = useState<
    Array<{
      left: number;
      top: number;
      shape: "circle" | "square";
    }>
  >([]);

  useEffect(() => {
    setIsClient(true);
    // Generate consistent positions for floating shapes
    setFloatingShapes([
      { left: 15, top: 20, shape: "circle" },
      { left: 65, top: 70, shape: "square" },
      { left: 85, top: 30, shape: "circle" },
    ]);
  }, []);

  if (!isClient) {
    return (
      <div className="absolute inset-0 -z-10">
        {/* Static fallback during SSR */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-5 transition-all duration-1000 ease-out pointer-events-none"
          style={{
            background: "radial-gradient(circle, #434343 0%, transparent 70%)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10">
      {/* Interactive mouse-following orbs - more subtle */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-5 transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background: "radial-gradient(circle, #434343 0%, transparent 70%)",
          left: `${(mousePosition.x / window.innerWidth) * 80 + 10}%`,
          top: `${(mousePosition.y / window.innerHeight) * 80 + 10}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Floating geometric shapes - more subtle */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingShapes.map((shape, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-float-horizontal"
            style={{
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${20 + i * 5}s`,
            }}
          >
            <div
              className={`w-6 h-6 ${
                shape.shape === "circle"
                  ? "rounded-full"
                  : "rounded-lg rotate-45"
              }`}
              style={{
                background: "linear-gradient(135deg, #434343 0%, #2a2a2a 100%)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
