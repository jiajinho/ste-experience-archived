import React from "react";
import { useGLTF } from "@react-three/drei";

import { GLTFResult } from "./types";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

export default (props: JSX.IntrinsicElements["group"]) => {
  const url = useAssetEnvUrl('static/gltf/rifts-mini.glb');

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