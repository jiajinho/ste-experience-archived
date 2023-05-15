import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useGlowAnimation from "../hooks/useGlowAnimation";

const url = "/static/gltf/faq-board.glb";

type GLTFResult = GLTF & {
  nodes: {
    cta: THREE.Mesh;
    content: THREE.Mesh;
    FAQBoard: THREE.Mesh;
  };
  materials: {
    cta: THREE.MeshStandardMaterial;
    content: THREE.MeshStandardMaterial;
    FAQBoard: THREE.MeshStandardMaterial;
  };
};

export default ({ cta, buttonGlow = false, ...props }: {
  cta?: JSX.IntrinsicElements["mesh"],
  buttonGlow?: boolean,
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  useGlowAnimation(materials.cta, buttonGlow, 0xED1B30);

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
        material={materials.cta}
        {...cta}
      />
      <mesh
        geometry={nodes.content.geometry}
        material={materials.content}
      />
      <mesh
        geometry={nodes.FAQBoard.geometry}
        material={materials.FAQBoard}
      />
    </group>
  );
}

useGLTF.preload(url);