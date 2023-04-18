import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import HtmlContent from "./HtmlContent";

const gltfUrl = "/static/gltf/faq-board.glb";
const mapUrl = "/static/texture/faq-texture.png";

type GLTFResult = GLTF & {
  nodes: {
    FAQBoard: THREE.Mesh;
  };
};

export default ({ onCallToAction, ...props }: {
  onCallToAction?: () => void
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

  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
      dispose={null}
    >
      <HtmlContent onCallToAction={onCallToAction} />

      <mesh geometry={nodes.FAQBoard.geometry} rotation-y={Math.PI}>
        <meshStandardMaterial
          map={map}
          metalness={0.1}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);