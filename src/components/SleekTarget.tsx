"use client";
import { Ring, Sphere, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface SleekTargetProps {
  position?: [number, number, number];
  scale?: number;
}

const SleekTarget = ({ position = [0, 0, 0], scale = 1 }: SleekTargetProps) => {
  const targetRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (targetRef.current) {
      targetRef.current.rotation.z = time * 0.2;
    }

    if (pulseRef.current) {
      const pulse = Math.sin(time * 2) * 0.1 + 1;
      pulseRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={targetRef} position={position} scale={scale}>
      {/* Central Point */}
      <Sphere args={[0.1]}>
        <meshStandardMaterial
          color="#ff0080"
          emissive="#ff0080"
          emissiveIntensity={0.8}
        />
      </Sphere>

      {/* Concentric Rings */}
      <group ref={pulseRef}>
        {Array.from({ length: 4 }, (_, i) => (
          <Ring
            key={i}
            args={[0.5 + i * 0.4, 0.6 + i * 0.4, 32]}
            rotation={[0, 0, (i * Math.PI) / 8]}
          >
            <meshStandardMaterial
              color={i % 2 === 0 ? "#00ffff" : "#ff0080"}
              transparent
              opacity={0.7 - i * 0.1}
              emissive={i % 2 === 0 ? "#00ffff" : "#ff0080"}
              emissiveIntensity={0.2}
            />
          </Ring>
        ))}
      </group>

      {/* Corner Markers */}
      {Array.from({ length: 4 }, (_, i) => (
        <Box
          key={i}
          args={[0.1, 0.3, 0.05]}
          position={[
            Math.cos((i * Math.PI) / 2) * 2.2,
            Math.sin((i * Math.PI) / 2) * 2.2,
            0,
          ]}
          rotation={[0, 0, (i * Math.PI) / 2]}
        >
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </Box>
      ))}

      {/* Scanning Lines */}
      {Array.from({ length: 8 }, (_, i) => (
        <Box
          key={i + 4}
          args={[0.02, 2.5, 0.02]}
          position={[0, 0, 0]}
          rotation={[0, 0, (i * Math.PI) / 4]}
        >
          <meshBasicMaterial color="#00ff88" transparent opacity={0.3} />
        </Box>
      ))}
    </group>
  );
};

export default SleekTarget;
