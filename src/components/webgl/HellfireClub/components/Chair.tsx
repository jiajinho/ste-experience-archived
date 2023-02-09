import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const url = "/static/glb/chair.glb";

type GLTFResult = GLTF & {
  nodes: { Chair_007: THREE.Mesh },
  materials: {}
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Chair_007.geometry}
        scale={0.1}
      >
        <meshStandardMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload(url);