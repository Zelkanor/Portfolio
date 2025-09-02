"use client";
import { Box, Sphere, Torus, Octahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface FloatingElementsProps {
  position?: [number, number, number];
  scale?: number;
  isMobile?: boolean;
}

const FloatingElements = ({
  position = [0, 0, 0],
  scale = 1,
  isMobile = false,
}: FloatingElementsProps) => {
  const group1Ref = useRef<THREE.Group>(null);
  const group2Ref = useRef<THREE.Group>(null);
  const group3Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (group1Ref.current) {
      group1Ref.current.rotation.x = time * 0.3;
      group1Ref.current.rotation.y = time * 0.2;
      group1Ref.current.position.y = Math.sin(time * 0.8) * 0.5;
    }

    if (group2Ref.current) {
      group2Ref.current.rotation.x = -time * 0.4;
      group2Ref.current.rotation.z = time * 0.3;
      group2Ref.current.position.y = Math.cos(time * 0.6) * 0.3;
    }

    if (group3Ref.current) {
      group3Ref.current.rotation.y = time * 0.5;
      group3Ref.current.rotation.z = -time * 0.2;
      group3Ref.current.position.y = Math.sin(time * 1.2) * 0.4;
    }
  });

  // Responsive positioning - keep elements more contained
  const cubePos: [number, number, number] = isMobile
    ? [-2, 5, -5]
    : [-4, 5, -5];
  const torusPos: [number, number, number] = isMobile ? [2, 3, -8] : [3, 3, -8];
  const octaPos: [number, number, number] = isMobile ? [1, -2, 5] : [2, -2, 5];

  return (
    <group position={position} scale={scale}>
      {/* Floating Wireframe Cube */}
      <group ref={group1Ref} position={cubePos}>
        <Box args={[1, 1, 1]}>
          <meshBasicMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.6}
          />
        </Box>
      </group>

      {/* Floating Torus */}
      <group ref={group2Ref} position={torusPos}>
        <Torus args={[0.8, 0.3, 8, 16]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.2}
            transparent
            opacity={0.8}
            wireframe
          />
        </Torus>
      </group>

      {/* Floating Octahedron */}
      <group ref={group3Ref} position={octaPos}>
        <Octahedron args={[1]}>
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={0.3}
            transparent
            opacity={0.7}
          />
        </Octahedron>
      </group>

      {/* Additional Small Spheres */}
      <Sphere args={[0.2]} position={[-12, 8, 2]}>
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.4}
          transparent
          opacity={0.9}
        />
      </Sphere>

      <Sphere args={[0.15]} position={[8, -5, -2]}>
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </Sphere>

      <Sphere args={[0.25]} position={[-5, -8, 8]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </group>
  );
};

export default FloatingElements;
