import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import HtmlContent from "./HtmlContent";

const gltfUrl = "/static/gltf/map.glb";
const mapUrl = "/static/texture/map-texture.png";

type GLTFResult = GLTF & {
  nodes: {
    Map: THREE.Mesh;
  };
};

export default ({ onReadMore, ...props }: {
  onReadMore?: () => void
} & JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

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
      <HtmlContent onReadMore={onReadMore} />

      <mesh geometry={nodes.Map.geometry} rotation-y={Math.PI}>
        <meshStandardMaterial
          map={map}
          metalness={0.1}
          roughness={0.6}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);