import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const url = "/static/glb/candlestand.glb";

type GLTFResult = GLTF & {
  nodes: {
    flame008: THREE.Mesh;
    Candle_002: THREE.Mesh;
  };
  materials: {};
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.flame008.geometry}
      >
        <meshStandardMaterial />
      </mesh>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Candle_002.geometry}
        material={nodes.Candle_002.material}
      >
        <meshStandardMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload(url);