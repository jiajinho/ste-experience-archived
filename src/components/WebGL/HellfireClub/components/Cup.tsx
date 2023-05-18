import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const gltfUrl = "/static/gltf/cup.glb";
const mapUrl = "/static/texture/cup.jpg";

type GLTFResult = GLTF & {
  nodes: {
    Cup: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const { map } = useTexture({ map: mapUrl });

  const triggerMover = useTriggerDebugModel(ref);

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
        geometry={nodes.Cup.geometry}
      >
        <meshPhongMaterial map={map} />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);