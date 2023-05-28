import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

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

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.ChairClassic.geometry}
        material={materials.ChairClassic}
      />
    </group>
  );
}

useGLTF.preload(url);