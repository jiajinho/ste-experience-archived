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

const material = new THREE.MeshPhongMaterial();

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

  useTexture(mapUrl, t => {
    const _t = t as THREE.Texture;
    _t.flipY = false;
    material.map = _t;
  });

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
        geometry={nodes.Cup.geometry}
        material={material}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);