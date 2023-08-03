import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    StickerCan: THREE.Mesh;
  };
  materials: {
    ["tinted-choco-can"]: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/sticker-choco-can.glb');

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.StickerCan.geometry}
        material={materials["tinted-choco-can"]}
      />
    </group>
  );
}

useGLTF.preload(url);