import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    PaperWhiteScribbled: THREE.Mesh;
  };
  materials: {
    paper: THREE.MeshPhysicalMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const url = useAssetEnvUrl('static/gltf/paper-white-scribbled.glb');

  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.PaperWhiteScribbled.geometry}
        material={materials.paper}
        scale={1.35}
      />
    </group>
  );
}