import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useCTAGlowAnimation from "../hooks/useCTAGlowAnimation";
import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    cta: THREE.Mesh;
    ChalkBoard: THREE.Mesh;
    xpass: THREE.Mesh;
  };
  materials: {
    cta: THREE.MeshStandardMaterial;
    ChalkBoard: THREE.MeshStandardMaterial;
    xpass: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/chalk-board.glb');

useGLTF.preload(url);

export default ({ cta, buttonGlow = false, ...props }: {
  cta: JSX.IntrinsicElements["mesh"],
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
        castShadow
        geometry={nodes.ChalkBoard.geometry}
        material={materials.ChalkBoard}
      />
      <mesh
        geometry={nodes.xpass.geometry}
        material={materials.xpass}
      />
    </group>
  );
}