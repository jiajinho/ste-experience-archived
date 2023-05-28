import React from "react";
import { useGLTF } from "@react-three/drei";

import { GLTFResult } from "./types";

const url = "/static/gltf/rifts-mini.glb";

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Rift_B.geometry}
        material={materials.Rift}
      />
    </group>
  );
}

useGLTF.preload(url);