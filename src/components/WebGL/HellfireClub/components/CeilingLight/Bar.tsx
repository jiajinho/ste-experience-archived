import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";
import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    CeilingLightBar: THREE.Mesh;
  }
};

const url = getAssetEnvUrl('static/gltf/ceiling-light-bar.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.CeilingLightBar.geometry}
        material={materials.lightStand}
      />
    </group>
  );
}