import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const gltfUrl = "/static/gltf/page.glb";
const mapUrl = "/static/texture/page/demogorgon.jpg"

type GLTFResult = GLTF & {
  nodes: {
    Page: THREE.Mesh;
  };
};

const material = new THREE.MeshStandardMaterial({
  metalness: 0.2,
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

  const handleClick = () => {
    triggerMover();
  }

  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.Page.geometry}
        material={material}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);