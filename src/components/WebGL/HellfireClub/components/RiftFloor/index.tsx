import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useAnimation from "./useAnimation";

const url = "/static/gltf/rift-floor.glb";

type GLTFResult = GLTF & {
  nodes: {
    Tentacle: THREE.Mesh;
    Sinew: THREE.Mesh;
    Floor: THREE.Mesh;
  };
  materials: {
    FloorRift: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);

  useAnimation(materials.FloorRift, spotlight);

  useEffect(() => {
    if (!spotlight.current) return;
    if (!lightBox.current) return;

    spotlight.current.target.position.set(0, -100, 0);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sinew.geometry}
        material={materials.FloorRift}
      />
      <mesh
        castShadow
        geometry={nodes.Tentacle.geometry}
        material={materials.FloorRift}
      />
      <mesh
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.FloorRift}
      />


      <spotLight
        ref={spotlight}
        castShadow
        angle={1.32}
        penumbra={1}
        distance={15}
        position={[0, 0.7, 0]}
        intensity={10}
        color="#b16c5f"
      />
    </group>
  );
}

useGLTF.preload(url);