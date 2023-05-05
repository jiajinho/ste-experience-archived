import React, { useRef } from "react";
import { Image, useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const url = "/static/gltf/polaroid.glb";

type GLTFResult = GLTF & {
  nodes: {
    Polaroid: THREE.Mesh;
  };
  materials: {
    Polaroid: THREE.MeshStandardMaterial;
  };
};

export default ({ color, imgUrl, ...props }: {
  color?: number,
  imgUrl: string
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerMover();
    props.onClick && props.onClick(e);
  }

  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
      scale={1.2}
    >
      <mesh geometry={nodes.Polaroid.geometry} >
        <meshStandardMaterial color={color} />
      </mesh>

      <Image
        url={imgUrl}
        scale={0.19}
        position={[0.001, 0.015, 0]}
        rotation-y={Math.PI / 2}
        color="#af9696"
      />
    </group>
  );
}

useGLTF.preload(url);