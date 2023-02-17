import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/glb/wall.glb";

type GLTFResult = GLTF & {
  nodes: {
    room: THREE.Mesh;
  };
  materials: {
    Room: THREE.MeshStandardMaterial;
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
        geometry={nodes.room.geometry}
        material={materials.Room}
      />
    </group>
  );
}

useGLTF.preload(url);