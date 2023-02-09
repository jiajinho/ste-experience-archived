import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const url = "/static/glb/vintage-tv.glb";

type GLTFResult = GLTF & {
  nodes: {
    Object007: THREE.Mesh,
    Tv: THREE.Mesh
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Object007.geometry}
        material={nodes.Object007.material}
        position={[1.4, -0.015, 0.6]}
        scale={0.1}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Tv.geometry}
        material={nodes.Tv.material}
        scale={0.1}
      />

    </group>
  );
}

useGLTF.preload(url);