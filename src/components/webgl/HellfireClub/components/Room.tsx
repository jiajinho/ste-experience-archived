import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const url = "/static/glb/room.glb";

type GLTFResult = GLTF & {
  nodes: {
    room: THREE.Mesh
  },
  materials: {}
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.room.geometry}
        material={nodes.room.material}
      />
    </group>
  );
}

useGLTF.preload(url);