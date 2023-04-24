import React, { useRef } from "react";
import { Image, useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const url = "/static/gltf/polaroid.glb";

type GLTFResult = GLTF & {
  nodes: {
    Polaroid: THREE.Mesh;
  };
  materials: {
    Polaroid: THREE.MeshStandardMaterial;
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
      dispose={null}
      scale={1.2}
    >
      <mesh
        geometry={nodes.Polaroid.geometry}
        material={materials.Polaroid}
      />

      <Image
        url='https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg'
        scale={0.19}
        position={[0.001, 0.015, 0]}
        rotation-y={Math.PI / 2}
        color="#5C4A46"
      />
    </group>
  );
}

useGLTF.preload(url);