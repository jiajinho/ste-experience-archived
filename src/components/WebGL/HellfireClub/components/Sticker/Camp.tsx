import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/sticker-camp.glb";

type GLTFResult = GLTF & {
  nodes: {
    StickerCamp: THREE.Mesh;
  };
  materials: {
    ["tinted-camp"]: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props}>
      <mesh
        geometry={nodes.StickerCamp.geometry}
        material={materials["tinted-camp"]}
      />
    </group>
  );
}

useGLTF.preload(url);