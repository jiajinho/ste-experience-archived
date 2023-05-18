import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/meeting-table.glb";

type GLTFResult = GLTF & {
  nodes: {
    MeetingTable: THREE.Mesh;
  };
  materials: {
    DNDTable: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  materials.DNDTable.metalness = 0.5;
  materials.DNDTable.roughness = 1;

  return (
    <group ref={ref} {...props}>
      <mesh
        geometry={nodes.MeetingTable.geometry}
        material={materials.DNDTable}
      />
    </group>
  );
}

useGLTF.preload(url);