import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    MeetingTable: THREE.Mesh;
  };
  materials: {
    DNDTable: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/meeting-table.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  materials.DNDTable.metalness = 0.5;
  materials.DNDTable.roughness = 1;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.MeetingTable.geometry}
        material={materials.DNDTable}
      />
    </group>
  );
}