import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    StickerCamp: THREE.Mesh;
  };
  materials: {
    ["tinted-camp"]: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const url = useAssetEnvUrl('static/gltf/sticker-camp.glb');

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