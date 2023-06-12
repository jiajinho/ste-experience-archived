import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    StickerCap: THREE.Mesh;
  };
  materials: {
    ["tinted-cap"]: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/sticker-cap.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.StickerCap.geometry}
        material={materials["tinted-cap"]}
      />
    </group>
  );
}