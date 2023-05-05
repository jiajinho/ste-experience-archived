import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

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

  const triggerMover = useTriggerDebugModel(ref);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerMover();
    props.onClick && props.onClick(e);
  }

  materials.DNDTable.metalness = 0.5;
  materials.DNDTable.roughness = 1;

  return (
    <group
      ref={ref}
      {...props}
      // onClick={handleClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.MeetingTable.geometry}
        material={materials.DNDTable}
      />
    </group>
  );
}

useGLTF.preload(url);