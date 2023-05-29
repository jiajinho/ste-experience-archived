import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useCTAGlowAnimation from "../hooks/useCTAGlowAnimation";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    cta: THREE.Mesh;
    map: THREE.Mesh;
  };
  materials: {
    cta: THREE.MeshStandardMaterial;
    ["map-texture"]: THREE.MeshStandardMaterial;
  };
};

export default ({ cta, buttonGlow = false, ...props }: {
  cta?: JSX.IntrinsicElements["mesh"],
  buttonGlow?: boolean
} & JSX.IntrinsicElements["group"]) => {
  const url = useAssetEnvUrl('static/gltf/map.glb');

  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  useCTAGlowAnimation(materials.cta, buttonGlow, 0xED1B30);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.cta.geometry}
        material={materials.cta}
        position={[0, 0.005, 0]}
        {...cta}
      />

      <mesh
        geometry={nodes.map.geometry}
        material={materials["map-texture"]}
      />
    </group>
  );
}