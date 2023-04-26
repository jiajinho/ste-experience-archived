import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import type { ThreeEvent } from "@react-three/fiber";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const gltfUrl = "/static/gltf/chair-ornamental.glb";
const mapUrl = "/static/texture/wood.jpg";

type GLTFResult = GLTF & {
  nodes: {
    WoodChair: THREE.Mesh;
  };
};

const material = new THREE.MeshStandardMaterial({
  roughness: 0.8
});

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
        castShadow
        geometry={nodes.WoodChair.geometry}
        material={material}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);