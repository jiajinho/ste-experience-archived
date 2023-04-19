import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import { applyRef } from "@webgl/HellfireClub/utils";
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const gltfUrl = "/static/gltf/card.glb";
const mapUrl = "/static/texture/when-where-texture.jpg";

type GLTFResult = GLTF & {
  nodes: {
    Card: THREE.Mesh;
  }
};

export default React.forwardRef(({ flipped = false, ...props }: {
  flipped?: boolean
} & JSX.IntrinsicElements["group"],
  ref: React.ForwardedRef<THREE.Group>
) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const _ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(_ref);

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerMover();
    props.onClick && props.onClick(e);
  }

  const rotateX = flipped ? Math.PI : 0;

  return (
    <group
      ref={r => applyRef([ref, _ref], r)}
      {...props}
      onClick={handleClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.Card.geometry}
        rotation={[rotateX, 0, 0]}
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