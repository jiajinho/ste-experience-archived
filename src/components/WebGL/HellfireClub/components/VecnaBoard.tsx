import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useCTAGlowAnimation from "../hooks/useCTAGlowAnimation";

const url = "/static/gltf/vecna-board.glb";

type GLTFResult = GLTF & {
  nodes: {
    cta: THREE.Mesh;
    VecnaBoard: THREE.Mesh;
  };
  materials: {
    cta: THREE.MeshStandardMaterial;
    VecnaBoard: THREE.MeshStandardMaterial;
  };
};

export default ({ cta, buttonGlow = false, ...props }: {
  cta?: JSX.IntrinsicElements["mesh"],
  buttonGlow?: boolean
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  useCTAGlowAnimation(materials.cta, buttonGlow, 0xEC1C24);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.cta.geometry}
        material={materials.cta}
        {...cta}
      />

      <mesh
        geometry={nodes.VecnaBoard.geometry}
        material={materials.VecnaBoard}
      >
      </mesh>
    </group>
  );
}

useGLTF.preload(url);