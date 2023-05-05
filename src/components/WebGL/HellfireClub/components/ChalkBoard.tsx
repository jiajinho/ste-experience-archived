import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useGlowAnimation from "../hooks/useGlowAnimation";

const url = "/static/gltf/chalk-board.glb";

type GLTFResult = GLTF & {
  nodes: {
    cta: THREE.Mesh;
    ChalkBoard: THREE.Mesh;
    ["xpass-texture"]: THREE.Mesh;
  };
  materials: {
    cta: THREE.MeshStandardMaterial;
    ChalkBoard: THREE.MeshStandardMaterial;
    ["xpass-texture"]: THREE.MeshStandardMaterial;
  };
};

export default ({ cta, buttonGlow = false, ...props }: {
  cta: JSX.IntrinsicElements["mesh"],
  buttonGlow?: boolean,
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  useGlowAnimation(materials.cta, buttonGlow, 0xED1B30);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.cta.geometry}
        material={materials.cta}
        position={[0, 0, 0.01]}
        {...cta}
      />
      <mesh
        castShadow
        geometry={nodes.ChalkBoard.geometry}
        material={materials.ChalkBoard}
      />
      <mesh
        geometry={nodes["xpass-texture"].geometry}
        material={materials["xpass-texture"]}
      />
    </group>
  );
}

useGLTF.preload(url);