import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    InstaPin: THREE.Mesh;
  };
  materials: {
    ["ig-pin"]: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/ig-pin.glb');

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