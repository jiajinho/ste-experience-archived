import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import { applyRef } from "@webgl/HellfireClub/utils";

const gltfUrl = "/static/gltf/card.glb";
const mapUrl = "/static/texture/the-encounter-texture.jpg";

type GLTFResult = GLTF & {
  nodes: {
    Card: THREE.Mesh;
  }
};

export default React.forwardRef((
  props: JSX.IntrinsicElements["group"],
  ref: React.ForwardedRef<THREE.Group>
) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const _ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(_ref);

  const map = useTexture(mapUrl);
  map.flipY = false;

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerMover();
    props.onClick && props.onClick(e);
  }

  return (
    <group
      ref={r => applyRef([ref, _ref], r)}
      {...props}
      onClick={handleClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.Card.geometry}
        scale={0.9}
      >
        <meshStandardMaterial
          map={map}
          metalness={0.1}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
});

useGLTF.preload(gltfUrl);