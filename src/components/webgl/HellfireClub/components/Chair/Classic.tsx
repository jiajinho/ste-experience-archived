import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useDebug from "../../hooks/useDebug";

const url = "/static/gltf/chair-classic.glb";

type GLTFResult = GLTF & {
  nodes: {
    ChairClassic: THREE.Mesh;
  };
  materials: {
    ChairClassic: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useDebug(ref);

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
        geometry={nodes.ChairClassic.geometry}
        material={materials.ChairClassic}
      />
    </group>
  );
}

useGLTF.preload(url);