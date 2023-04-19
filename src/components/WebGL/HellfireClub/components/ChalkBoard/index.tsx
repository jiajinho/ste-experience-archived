import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import HtmlContent from "./HtmlContent";

const url = "/static/gltf/chalkboard.glb";

type GLTFResult = GLTF & {
  nodes: {
    ChalkBoard: THREE.Mesh;
  };
  materials: {
    ChalkBoard: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <HtmlContent />

      <mesh
        castShadow
        geometry={nodes.ChalkBoard.geometry}
        material={materials.ChalkBoard}
      />
    </group>
  );
}

useGLTF.preload(url);