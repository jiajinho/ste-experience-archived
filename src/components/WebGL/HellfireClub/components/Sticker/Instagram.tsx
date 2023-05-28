import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/ig-pin.glb";

type GLTFResult = GLTF & {
  nodes: {
    InstaPin: THREE.Mesh;
  };
  materials: {
    ["ig-pin"]: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.InstaPin.geometry}
        material={materials["ig-pin"]}
      />
    </group>
  );
}

useGLTF.preload(url);