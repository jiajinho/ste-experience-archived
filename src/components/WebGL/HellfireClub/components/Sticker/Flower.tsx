import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/sticker-flower.glb";

type GLTFResult = GLTF & {
  nodes: {
    StickerFlower: THREE.Mesh;
  };
  materials: {
    ["tinted-flower-choco"]: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
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

useGLTF.preload(url);