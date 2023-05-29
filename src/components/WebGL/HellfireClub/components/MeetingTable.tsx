import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    MeetingTable: THREE.Mesh;
  };
  materials: {
    DNDTable: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const url = useAssetEnvUrl('static/gltf/meeting-table.glb');

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