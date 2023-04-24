import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useCursorPointer from "../useCursorPointer";

const gltfUrl = "/static/gltf/map.glb";

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

export default ({ onCallToAction, ...props }: {
  onCallToAction?: () => void
} & JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

  const pointerEvents = useCursorPointer();

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
        onClick={onCallToAction}
        {...pointerEvents}
      />

      <mesh
        geometry={nodes.map.geometry}
        material={materials["map-texture"]}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);