import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";

import { GLTFResult } from "./types";
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const url = "/static/gltf/rifts-mini.glb";

export default ({ material, ...props }: {
  material: THREE.Material
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;
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
      dispose={null}
    >
      <mesh
        geometry={nodes.Rift_B.geometry}
        material={material}
      />
    </group>
  );
}

useGLTF.preload(url);