import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const gltfUrl = "/static/gltf/lamp.glb";
const colorMapUrl = "/static/texture/lamp-color.jpg";
const normalMapUrl = "/static/texture/lamp-normal.jpg";

type GLTFResult = GLTF & {
  nodes: {
    LampHead: THREE.Mesh;
    Lamp: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

  const { colorMap, normalMap } = useTexture({
    colorMap: colorMapUrl,
    normalMap: normalMapUrl
  });

  colorMap.flipY = false;
  normalMap.flipY = false;

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerMover();
    props.onClick && props.onClick(e);
  }

  /**
   * Render
   */
  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
    >
      <mesh
        castShadow
        geometry={nodes.LampHead.geometry}
      >
        <meshStandardMaterial
          metalness={0.3}
          roughness={0.7}
          map={colorMap}
          normalMap={normalMap}
        />
      </mesh>

      <mesh
        castShadow
        geometry={nodes.Lamp.geometry}
      >
        <meshStandardMaterial
          metalness={0.6}
          roughness={0.2}
          map={colorMap}
          normalMap={normalMap}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);