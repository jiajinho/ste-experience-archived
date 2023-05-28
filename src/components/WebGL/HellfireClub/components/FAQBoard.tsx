import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useCTAGlowAnimation from "../hooks/useCTAGlowAnimation";

const url = "/static/gltf/faq-board.glb";

type GLTFResult = GLTF & {
  nodes: {
    cta: THREE.Mesh;
    content: THREE.Mesh;
    FAQBoard: THREE.Mesh;
  };
  materials: {
    cta: THREE.MeshStandardMaterial;
    content: THREE.MeshStandardMaterial;
    FAQBoard: THREE.MeshStandardMaterial;
  };
};

export default ({ cta, buttonGlow = false, ...props }: {
  cta?: JSX.IntrinsicElements["mesh"],
  buttonGlow?: boolean,
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  useCTAGlowAnimation(materials.cta, buttonGlow, 0xED1B30);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.cta.geometry}
        material={materials.cta}
        {...cta}
      />
      <mesh
        geometry={nodes.content.geometry}
        material={materials.content}
      />
      <mesh
        geometry={nodes.FAQBoard.geometry}
        material={materials.FAQBoard}
      />
    </group>
  );
}

useGLTF.preload(url);