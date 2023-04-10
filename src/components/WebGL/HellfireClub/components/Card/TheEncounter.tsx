import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const gltfUrl = "/static/gltf/card.glb";
const mapUrl = "/static/texture/the-encounter-texture.jpg";

type GLTFResult = GLTF & {
  nodes: {
    Card: THREE.Mesh;
  }
};

export default ({ flipped = false, ...props }: {
  flipped?: boolean
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerMover();
    props.onClick && props.onClick(e);
  }

  const rotateX = flipped ? Math.PI : 0;

  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.Card.geometry}
        rotation={[rotateX, 0, 0]}
      >
        <meshStandardMaterial
          map={map}
          metalness={0.1}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);