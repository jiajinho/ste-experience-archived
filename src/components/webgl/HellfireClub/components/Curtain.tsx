import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const url = "/static/glb/curtain.glb";

type GLTFResult = GLTF & {
  nodes: { Curtain_002: THREE.Mesh },
  materials: {}
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Curtain_002.geometry}
        scale={0.1}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload(url);