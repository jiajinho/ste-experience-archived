import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";
import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    CeilingLightBulb: THREE.Mesh;
    CeilingLightCup: THREE.Mesh;
  }
};

const url = getAssetEnvUrl('static/gltf/ceiling-light-bulb.glb');

useGLTF.preload(url);

export default ({ material, ...props }: {
  material: THREE.Material
} & JSX.IntrinsicElements["group"]) => {
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