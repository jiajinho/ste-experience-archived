import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import _materials from "../materials";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    HellfireStandSign: THREE.Mesh;
    HellfireStand: THREE.Mesh;
  };
  materials: {
    HellfireSign: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const url = useAssetEnvUrl('static/gltf/hellfire-sign.glb');

  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.HellfireStandSign.geometry}
        material={materials.HellfireSign}
      />
      <mesh
        geometry={nodes.HellfireStand.geometry}
        material={_materials.lightStand}
      />
    </group>
  );
}