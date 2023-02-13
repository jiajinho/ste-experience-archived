import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import type { ThreeEvent } from "@react-three/fiber";

import { applyObjectMover } from "../utils";

const url = "/static/glb/cupboard.glb";

type GLTFResult = GLTF & {
  nodes: {
    Box011: THREE.Mesh;
  };
  materials: {};
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    applyObjectMover(group.current, mesh.current);
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
        ref={mesh}
        geometry={nodes.Box011.geometry}
        material={nodes.Box011.material}
      />
    </group>
  );
}

useGLTF.preload(url);