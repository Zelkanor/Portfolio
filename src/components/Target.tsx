import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import { Group } from "three";

gsap.registerPlugin(useGSAP);

type TargetProps = {
  position: [number, number, number];
  scale: number;
};

const Target = ({ position, scale }: TargetProps) => {
  const targetRef = useRef<Group>(null);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    if (!targetRef.current) return;
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      scale={scale}
      position={position}
    >
      <primitive object={scene} />
    </mesh>
  );
};
useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
);

export default Target;
