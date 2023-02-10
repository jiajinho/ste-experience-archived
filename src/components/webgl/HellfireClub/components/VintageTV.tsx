import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import type { ThreeEvent } from "@react-three/fiber";

import { applyObjectMover } from "../utils";

const url = "/static/glb/vintage-tv.glb";

type GLTFResult = GLTF & {
  nodes: {
    Object007: THREE.Mesh,
    Tv: THREE.Mesh
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const group = useRef<THREE.Group | null>(null);
  const tv = useRef<THREE.Mesh>(null);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    applyObjectMover(group.current, tv.current);
    props.onClick && props.onClick(e);
  }

  return (
    <group
      ref={group}
      {...props}
      onClick={handleClick}
      dispose={null}
    >
      <mesh
        ref={tv}
        geometry={nodes.Tv.geometry}
        material={nodes.Tv.material}
      />
      <mesh
        geometry={nodes.Object007.geometry}
        material={nodes.Object007.material}
      />
    </group>
  );
}

useGLTF.preload(url);