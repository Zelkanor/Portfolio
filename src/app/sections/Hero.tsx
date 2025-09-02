"use client";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Button from "@/components/Button";
import FloatingElements from "@/components/FloatingElements";
import CanvasLoader from "@/components/loader";
import ModernRings from "@/components/ModernRings";
import SimpleParticles from "@/components/SimpleParticles";
import SleekCube from "@/components/SleekCube";
import SleekReactLogo from "@/components/SleekReactLogo";
import SleekTarget from "@/components/SleekTarget";
import { calculateSizes } from "@/constants";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <section
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden max-w-[100vw]"
      id="home"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-80 sm:h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* 3D Canvas Background - Always absolute positioned */}
      <div
        className={`absolute inset-0 overflow-hidden ${
          isMobile ? "opacity-20" : isTablet ? "opacity-40" : "opacity-50"
        }`}
        style={{ maxWidth: "100vw", overflowX: "hidden" }}
      >
        <Canvas
          className="w-full h-full max-w-[100vw]"
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          gl={{
            antialias: false,
            powerPreference: "high-performance",
          }}
          camera={{
            position: [0, 0, 20],
            fov: isMobile ? 60 : isTablet ? 65 : 75,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            {/* Simple particle background */}
            <SimpleParticles count={40} isMobile={isMobile} />

            {/* Floating Elements positioned in background - More spread out */}
            <FloatingElements
              position={
                isMobile ? [12, 4, -18] : isTablet ? [18, 6, -24] : [25, 8, -30]
              }
              scale={isMobile ? 0.6 : isTablet ? 0.8 : 1.0}
              isMobile={isMobile}
            />

            {/* Additional floating elements on the opposite side */}
            <FloatingElements
              position={
                isMobile
                  ? [-10, -2, -15]
                  : isTablet
                  ? [-15, -3, -20]
                  : [-20, -4, -25]
              }
              scale={isMobile ? 0.4 : isTablet ? 0.6 : 0.8}
              isMobile={isMobile}
            />

            {/* Sleek floating components - Better spread */}
            <group>
              <SleekTarget
                position={sizes.targetPosition as [number, number, number]}
                scale={sizes.targetScale * 0.8}
              />
              <SleekReactLogo
                position={sizes.reactLogoPosition as [number, number, number]}
                scale={sizes.reactLogoScale * 0.9}
              />
              <ModernRings
                position={sizes.ringPosition as [number, number, number]}
                scale={sizes.ringScale * 0.7}
              />
              <SleekCube
                position={sizes.cubePosition as [number, number, number]}
                scale={sizes.cubeScale * 0.6}
              />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Section - Always centered */}
      <div className="w-full h-full flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto py-12 sm:py-16 lg:py-20">
          <div className="text-center space-y-8 lg:space-y-10">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 font-generalsans animate-fade-in">
              Hi, I am{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                Nikhil
              </span>{" "}
              <span className="waving-hand">👋</span>
            </p>

            <div className="hero_tag animate-fade-in-up delay-200">
              Building Products & Brands
            </div>

            <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed animate-fade-in-up delay-400 max-w-3xl mx-auto px-4 sm:px-0">
              Crafting digital experiences with cutting-edge technology and
              creative vision
            </p>

            {/* CTA Button - Always centered */}
            <div className="pt-6 lg:pt-8 animate-fade-in-up delay-600 flex justify-center">
              <Link href="#contact" className="inline-block">
                <Button
                  name="Let's work together"
                  isBeam
                  containerClass="px-8 py-4 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
