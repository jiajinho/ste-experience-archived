import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    PaperWhiteEmpty: THREE.Mesh;
  };
  materials: {
    paper: THREE.MeshPhysicalMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/paper-white-empty.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.PaperWhiteEmpty.geometry}
        material={materials.paper}
        scale={1.35}
      />
    </group>
  );
}