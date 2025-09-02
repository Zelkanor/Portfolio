"use client";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import Button from "@/components/Button";
import Cube from "@/components/Cube";
import HackerRoom from "@/components/HackerRoom";
import HeroCamera from "@/components/HeroCamera";
import CanvasLoader from "@/components/loader";
import ReactLogo from "@/components/ReactLogo";
import Rings from "@/components/Rings";
import Target from "@/components/Target";
import { calculateSizes } from "@/constants";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 380 });
  const isMobile = useMediaQuery({ maxWidth: 450 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Nikhil <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition as [number, number, number]}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target
                position={sizes.targetPosition as [number, number, number]}
                scale={sizes.targetScale}
              />
              <ReactLogo
                position={sizes.reactLogoPosition as [number, number, number]}
                scale={sizes.reactLogoScale}
              />
              <Rings
                position={sizes.ringPosition as [number, number, number]}
                scale={sizes.ringScale}
              />
              <Cube
                position={sizes.cubePosition as [number, number, number]}
                scale={sizes.cubeScale}
              />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <Link href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
