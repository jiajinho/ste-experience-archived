import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import config from "../../config";

const url = "/static/gltf/ceiling-light-bar.glb";

type GLTFResult = GLTF & {
  nodes: {
    CeilingLightBar: THREE.Mesh;
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.CeilingLightBar.geometry}
        material={config.lightStandMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);