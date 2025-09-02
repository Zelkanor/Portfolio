"use client";
import { Torus, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface ModernRingsProps {
  position?: [number, number, number];
  scale?: number;
}

const ModernRings = ({ position = [0, 0, 0], scale = 1 }: ModernRingsProps) => {
  const ringsRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (ringsRef.current) {
      ringsRef.current.rotation.x = time * 0.3;
      ringsRef.current.rotation.y = time * 0.2;
    }

    if (orbitRef.current) {
      orbitRef.current.rotation.y = -time * 0.5;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Main Ring System */}
      <group ref={ringsRef}>
        {Array.from({ length: 3 }, (_, i) => (
          <Torus
            key={i}
            args={[1 + i * 0.5, 0.1, 16, 100]}
            rotation={[(i * Math.PI) / 4, (i * Math.PI) / 6, 0]}
          >
            <meshStandardMaterial
              color={i === 0 ? "#ff6b00" : i === 1 ? "#00ff88" : "#0088ff"}
              emissive={i === 0 ? "#ff6b00" : i === 1 ? "#00ff88" : "#0088ff"}
              emissiveIntensity={0.4}
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.8}
            />
          </Torus>
        ))}
      </group>

      {/* Orbiting Elements */}
      <group ref={orbitRef}>
        {Array.from({ length: 6 }, (_, i) => (
          <Sphere
            key={i}
            args={[0.08]}
            position={[
              Math.cos((i * Math.PI * 2) / 6) * 2.2,
              Math.sin((i * Math.PI * 2) / 6) * 0.3,
              Math.sin((i * Math.PI * 2) / 6) * 2.2,
            ]}
          >
            <meshStandardMaterial
              color={
                i % 3 === 0 ? "#ff6b00" : i % 3 === 1 ? "#00ff88" : "#0088ff"
              }
              emissive={
                i % 3 === 0 ? "#ff6b00" : i % 3 === 1 ? "#00ff88" : "#0088ff"
              }
              emissiveIntensity={0.6}
            />
          </Sphere>
        ))}
      </group>

      {/* Energy Core */}
      <Sphere args={[0.2]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>
    </group>
  );
};

export default ModernRings;
