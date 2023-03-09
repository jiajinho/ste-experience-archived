import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useDebug from "../hooks/useDebug";

const gltfUrl = "/static/gltf/soda.glb";
const mapUrl = "/static/texture/soda-dice-paper.jpg";

type GLTFResult = GLTF & {
  nodes: {
    Soda: THREE.Mesh;
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useDebug(ref);

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
      <mesh geometry={nodes.Soda.geometry}>
        <meshStandardMaterial
          map={map}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);