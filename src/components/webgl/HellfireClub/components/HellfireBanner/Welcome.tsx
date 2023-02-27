import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useMover from "../../hooks/useMover";

const url = "/static/gltf/hellfire-banner-welcome.glb";

type GLTFResult = GLTF & {
  nodes: {
    HellfireSignWelcome: THREE.Mesh;
  };
  materials: {
    SG1: THREE.MeshStandardMaterial;
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
        geometry={nodes.HellfireSignWelcome.geometry}
        material={materials.SG1}
      />
    </group>
  );
}

useGLTF.preload(url);