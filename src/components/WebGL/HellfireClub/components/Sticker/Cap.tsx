import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/sticker-cap.glb";

type GLTFResult = GLTF & {
  nodes: {
    StickerCap: THREE.Mesh;
  };
  materials: {
    ["tinted-cap"]: THREE.MeshStandardMaterial;
  };
};

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

useGLTF.preload(url);