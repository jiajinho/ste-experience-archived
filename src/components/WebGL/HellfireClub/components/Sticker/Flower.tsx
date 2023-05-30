import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    StickerFlower: THREE.Mesh;
  };
  materials: {
    ["tinted-flower-choco"]: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const url = useAssetEnvUrl('static/gltf/sticker-flower.glb');

  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.StickerFlower.geometry}
        material={materials["tinted-flower-choco"]}
      />
    </group>
  );
}