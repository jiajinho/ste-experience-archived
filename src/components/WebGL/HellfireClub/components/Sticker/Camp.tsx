import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    StickerCamp: THREE.Mesh;
  };
  materials: {
    ["tinted-camp"]: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/sticker-camp.glb');

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.StickerCamp.geometry}
        material={materials["tinted-camp"]}
      />
    </group>
  );
}

useGLTF.preload(url);