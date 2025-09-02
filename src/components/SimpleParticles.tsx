"use client";
import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface SimpleParticlesProps {
  count?: number;
  isMobile?: boolean;
}

const SimpleParticles = ({
  count = 50,
  isMobile = false,
}: SimpleParticlesProps) => {
  const particlesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, index) => {
        const offset = index * 0.1;
        particle.position.y += Math.sin(time * 0.5 + offset) * 0.005;
        particle.position.x += Math.cos(time * 0.3 + offset) * 0.003;
      });
    }
  });

  const particleCount = isMobile ? Math.floor(count * 0.6) : count;
  const spread = isMobile ? 15 : 25;

  return (
    <group ref={particlesRef}>
      {Array.from({ length: particleCount }, (_, i) => (
        <Sphere
          key={i}
          args={[0.02]}
          position={[
            (Math.random() - 0.5) * spread,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * spread,
          ]}
        >
          <meshBasicMaterial
            color={
              i % 4 === 0
                ? "#8b5cf6"
                : i % 4 === 1
                ? "#06b6d4"
                : i % 4 === 2
                ? "#ec4899"
                : "#f59e0b"
            }
            transparent
            opacity={0.6}
          />
        </Sphere>
      ))}
    </group>
  );
};

export default SimpleParticles;
