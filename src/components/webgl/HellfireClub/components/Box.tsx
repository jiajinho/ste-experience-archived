import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useMover from "../hooks/useMover";

const url = "/static/gltf/box.glb";

type GLTFResult = GLTF & {
  nodes: {
    Box: THREE.Mesh;
  };
  materials: {
    Box: THREE.MeshStandardMaterial;
  };
};
export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useMover(ref);

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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box.geometry}
        material={materials.Box}
      />
    </group>
  );
}

useGLTF.preload(url);