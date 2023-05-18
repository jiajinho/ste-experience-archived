import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const gltfUrl = "/static/gltf/soda.glb";
const mapUrl = "/static/texture/soda.jpg";

type GLTFResult = GLTF & {
  nodes: {
    Soda: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

  const { map } = useTexture({ map: mapUrl });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerMover();
    props.onClick && props.onClick(e);
  }

  map.flipY = false;

  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
    >
      <mesh
        castShadow
        geometry={nodes.Soda.geometry}
      >
        <meshStandardMaterial
          map={map}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);