import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    StickerCan: THREE.Mesh;
  };
  materials: {
    ["tinted-choco-can"]: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const url = useAssetEnvUrl('static/gltf/sticker-choco-can.glb');

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