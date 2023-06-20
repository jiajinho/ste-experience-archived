import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    StickerHamburger: THREE.Mesh;
  };
  materials: {
    hamburger: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/sticker-hamburger.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.StickerHamburger.geometry}
        material={materials.hamburger}
      />
    </group>
  );
}