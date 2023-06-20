import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    Throne: THREE.Mesh;
  };
  materials: {
    Throne: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/throne.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Throne.geometry}
        material={materials.Throne}
      />
    </group>
  );
}