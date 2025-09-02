"use client";
import { Torus, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface SleekReactLogoProps {
  position?: [number, number, number];
  scale?: number;
}

const SleekReactLogo = ({
  position = [0, 0, 0],
  scale = 1,
}: SleekReactLogoProps) => {
  const logoRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (logoRef.current) {
      logoRef.current.rotation.y = time * 0.5;
    }

    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, index) => {
        ring.rotation.x = time * (0.3 + index * 0.1);
        ring.rotation.z = time * (0.2 + index * 0.05);
      });
    }
  });

  return (
    <group ref={logoRef} position={position} scale={scale}>
      {/* Central Core */}
      <Sphere args={[0.3]}>
        <meshStandardMaterial
          color="#61dafb"
          emissive="#61dafb"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      {/* Orbital Rings */}
      <group ref={ringsRef}>
        {Array.from({ length: 3 }, (_, i) => (
          <Torus
            key={i}
            args={[1.5 + i * 0.3, 0.05, 8, 50]}
            rotation={[(i * Math.PI) / 3, (i * Math.PI) / 4, (i * Math.PI) / 6]}
          >
            <meshStandardMaterial
              color="#61dafb"
              emissive="#61dafb"
              emissiveIntensity={0.3 - i * 0.1}
              transparent
              opacity={0.8 - i * 0.1}
              wireframe
            />
          </Torus>
        ))}
      </group>

      {/* Floating Particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <Sphere
          key={i}
          args={[0.05]}
          position={[
            Math.cos((i * Math.PI * 2) / 8) * 2.5,
            Math.sin((i * Math.PI * 2) / 8) * 0.5,
            Math.sin((i * Math.PI * 2) / 8) * 2.5,
          ]}
        >
          <meshBasicMaterial color="#61dafb" transparent opacity={0.8} />
        </Sphere>
      ))}
    </group>
  );
};

export default SleekReactLogo;
