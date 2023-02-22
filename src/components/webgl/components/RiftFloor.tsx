import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/rift-floor.glb";

type GLTFResult = GLTF & {
  nodes: {
    floor_LR1: THREE.Mesh;
    hole_LR1: THREE.Mesh;
    sinew_LR1: THREE.Mesh;
    Tentacles_LR1: THREE.Mesh;
  };
  materials: {
    Rift1: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.floor_LR1.geometry}
        material={materials.Rift1}
      />
      <mesh
        geometry={nodes.hole_LR1.geometry}
        material={materials.Rift1}
      />
      <mesh
        geometry={nodes.sinew_LR1.geometry}
        material={materials.Rift1}
      />
      <mesh
        geometry={nodes.Tentacles_LR1.geometry}
        material={materials.Rift1}
      />
    </group>
  );
}

useGLTF.preload(url);