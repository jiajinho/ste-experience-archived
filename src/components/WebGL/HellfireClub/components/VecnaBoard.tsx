import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useCTAGlowAnimation from "../hooks/useCTAGlowAnimation";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

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
  const url = useAssetEnvUrl('static/gltf/vecna-board.glb');

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