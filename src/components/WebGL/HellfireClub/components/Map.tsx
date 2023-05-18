import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useCTAGlowAnimation from "../hooks/useCTAGlowAnimation";

const url = "/static/gltf/map.glb";

type GLTFResult = GLTF & {
  nodes: {
    cta: THREE.Mesh;
    map: THREE.Mesh;
  };
  materials: {
    cta: THREE.MeshStandardMaterial;
    ["map-texture"]: THREE.MeshStandardMaterial;
  };
};

export default ({ cta, buttonGlow = false, ...props }: {
  cta?: JSX.IntrinsicElements["mesh"],
  buttonGlow?: boolean
} & JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  useCTAGlowAnimation(materials.cta, buttonGlow, 0xED1B30);

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
        position={[0, 0.005, 0]}
        {...cta}
      />

      <mesh
        geometry={nodes.map.geometry}
        material={materials["map-texture"]}
      />
    </group>
  );
}

useGLTF.preload(url);