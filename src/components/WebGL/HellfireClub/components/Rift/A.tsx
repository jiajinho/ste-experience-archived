import React from "react";
import { useGLTF } from "@react-three/drei";

import { GLTFResult } from "./types";
import { getAssetEnvUrl } from "@/utils";

const url = getAssetEnvUrl('static/gltf/rifts-mini.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Rift_A.geometry}
        material={materials.Rift}
      />
    </group>
  );
}