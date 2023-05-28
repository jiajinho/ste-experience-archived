import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/sticker-hamburger.glb";

type GLTFResult = GLTF & {
  nodes: {
    StickerHamburger: THREE.Mesh;
  };
  materials: {
    hamburger: THREE.MeshStandardMaterial;
  };
};

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

useGLTF.preload(url);