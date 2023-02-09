import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const url = "/static/glb/coffee-tabletop.glb";

type GLTFResult = GLTF & {
  nodes: { coffeetable: THREE.Mesh },
  materials: {}
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.coffeetable.geometry}
        scale={0.1}
      >
        <meshStandardMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload(url);