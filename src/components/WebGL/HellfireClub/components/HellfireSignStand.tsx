import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import _materials from "../materials";
import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    HellfireStandSign: THREE.Mesh;
    HellfireStand: THREE.Mesh;
  };
  materials: {
    HellfireSign: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/hellfire-sign.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
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