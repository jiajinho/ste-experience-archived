import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { GLTFResult } from "./types";

const url = "/static/gltf/rifts-mini.glb";

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  return (
    <group ref={ref} {...props}>
      <mesh
        geometry={nodes.Rift_B.geometry}
        material={materials.Rift}
      />
    </group>
  );
}

useGLTF.preload(url);