"use client";
import { Box, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface SleekCubeProps {
  position?: [number, number, number];
  scale?: number;
}

const SleekCube = ({ position = [0, 0, 0], scale = 1 }: SleekCubeProps) => {
  const cubeRef = useRef<THREE.Group>(null);
  const frameRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (cubeRef.current) {
      cubeRef.current.rotation.x = time * 0.2;
      cubeRef.current.rotation.y = time * 0.3;
      cubeRef.current.rotation.z = time * 0.1;
    }

    if (frameRef.current) {
      frameRef.current.rotation.x = -time * 0.1;
      frameRef.current.rotation.y = -time * 0.2;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.4;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Main Cube */}
      <group ref={cubeRef}>
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial
            color="#000000"
            metalness={0.9}
            roughness={0.1}
            emissive="#0066ff"
            emissiveIntensity={0.1}
            transparent
            opacity={0.8}
          />
        </Box>
      </group>

      {/* Wireframe Outline */}
      <group ref={frameRef}>
        <Box args={[1.2, 1.2, 1.2]}>
          <meshBasicMaterial
            color="#00ffff"
            wireframe
            transparent
            opacity={0.6}
          />
        </Box>
      </group>

      {/* Corner Particles */}
      <group ref={particlesRef}>
        {[
          [-0.7, -0.7, -0.7],
          [0.7, -0.7, -0.7],
          [-0.7, 0.7, -0.7],
          [0.7, 0.7, -0.7],
          [-0.7, -0.7, 0.7],
          [0.7, -0.7, 0.7],
          [-0.7, 0.7, 0.7],
          [0.7, 0.7, 0.7],
        ].map((pos, i) => (
          <Sphere
            key={i}
            args={[0.05]}
            position={pos as [number, number, number]}
          >
            <meshStandardMaterial
              color="#ffff00"
              emissive="#ffff00"
              emissiveIntensity={0.8}
            />
          </Sphere>
        ))}
      </group>

      {/* Energy Trails */}
      {Array.from({ length: 12 }, (_, i) => (
        <Box
          key={i}
          args={[0.02, 1.5, 0.02]}
          position={[
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
          ]}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
          ]}
        >
          <meshBasicMaterial
            color={
              i % 3 === 0 ? "#ff0088" : i % 3 === 1 ? "#00ff88" : "#0088ff"
            }
            transparent
            opacity={0.4}
          />
        </Box>
      ))}
    </group>
  );
};

export default SleekCube;
