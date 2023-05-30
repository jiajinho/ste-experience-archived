import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    CeilingLightBulb: THREE.Mesh;
    CeilingLightCup: THREE.Mesh;
  }
};

export default ({ material, ...props }: {
  material: THREE.Material
} & JSX.IntrinsicElements["group"]) => {
  const url = useAssetEnvUrl('static/gltf/ceiling-light-bulb.glb');

  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.CeilingLightBulb.geometry}
        material={material}
      />

      <mesh
        geometry={nodes.CeilingLightCup.geometry}
        material={materials.lightStand}
      />
    </group>
  );
}