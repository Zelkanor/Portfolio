import { Float, useGLTF } from "@react-three/drei";
import { JSX } from "react";
import * as THREE from "three";

const ReactLogo = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("models/react.glb") as unknown as {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
  };

  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.3} {...props} dispose={null}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("models/react.glb");

export default ReactLogo;
