import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    NoticeBoard: THREE.Mesh;
  };
  materials: {
    NoticeBoard: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/notice-board.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.NoticeBoard.geometry}
        material={materials.NoticeBoard}
      />
    </group>
  );
}