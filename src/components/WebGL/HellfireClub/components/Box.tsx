import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    Box: THREE.Mesh;
  };
  materials: {
    box: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/box.glb');

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Box.geometry}
        material={materials.box}
      />
    </group>
  );
}