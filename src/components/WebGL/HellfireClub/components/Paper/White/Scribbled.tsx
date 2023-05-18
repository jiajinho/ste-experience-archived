import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const url = "/static/gltf/paper-white-scribbled.glb";

type GLTFResult = GLTF & {
  nodes: {
    PaperWhiteScribbled: THREE.Mesh;
  };
  materials: {
    paper: THREE.MeshPhysicalMaterial;
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

  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
    >
      <mesh
        geometry={nodes.PaperWhiteScribbled.geometry}
        material={materials.paper}
        scale={1.35}
      />
    </group>
  );
}

useGLTF.preload(url);