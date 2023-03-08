import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useDebug from "../hooks/useDebug";
import config from "../config";

const url = "/static/gltf/hellfire-sign.glb";

type GLTFResult = GLTF & {
  nodes: {
    HellfireStandSign: THREE.Mesh;
    HellfireStand: THREE.Mesh;
  };
  materials: {
    HellfireSign: THREE.MeshStandardMaterial;
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
        castShadow
        geometry={nodes.HellfireStandSign.geometry}
        material={materials.HellfireSign}
      />
      <mesh
        castShadow
        geometry={nodes.HellfireStand.geometry}
        material={config.lightStandMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);