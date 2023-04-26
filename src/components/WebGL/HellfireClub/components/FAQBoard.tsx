import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const url = "/static/gltf/faq-board.glb";

type GLTFResult = GLTF & {
  nodes: {
    cta: THREE.Mesh;
    FAQBoard: THREE.Mesh;
  };
  materials: {
    ["cta.001"]: THREE.MeshStandardMaterial;
    ["FAQBoard.001"]: THREE.MeshStandardMaterial;
  };
};

export default ({ onCallToAction, ...props }: {
  onCallToAction?: () => void
} & JSX.IntrinsicElements["group"]
) => {
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
      dispose={null}
    >
      <mesh
        geometry={nodes.cta.geometry}
        material={materials["cta.001"]}
        onClick={onCallToAction}
      />
      <mesh
        geometry={nodes.FAQBoard.geometry}
        material={materials["FAQBoard.001"]}
      />
    </group>
  );
}

useGLTF.preload(url);