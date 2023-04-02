import React, { useRef } from "react";
import { useGLTF, } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const url = "/static/gltf/paper-empty.glb";

type GLTFResult = GLTF & {
  nodes: {
    EmptyPaper: THREE.Mesh;
  }
};

export default ({ material, ...props }: {
  material?: THREE.Material
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
        geometry={nodes.EmptyPaper.geometry}
        material={material}
      />
    </group>
  );
}

useGLTF.preload(url);