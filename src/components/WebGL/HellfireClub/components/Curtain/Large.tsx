import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";
import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    CurtainLarge: THREE.Mesh;
  }
};

const url = getAssetEnvUrl('static/gltf/curtain-large.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {

  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.CurtainLarge.geometry}
        material={materials.curtain}
      />
    </group>
  );
}