import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    Wall: THREE.Mesh;
  };
  materials: {
    Wall: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/wall.glb')

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        position-y={-0.05}
        geometry={nodes.Wall.geometry}
        material={materials.Wall}
      />
    </group>
  );
}