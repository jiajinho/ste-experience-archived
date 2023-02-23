import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";
import config from "../config";

const url = "/static/gltf/hellfire-sign.glb";

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
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  const { ref, onClick } = useMover(props);

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.HellfireStandSign.geometry}
        material={materials.HellfireSign}
      />
      <mesh
        geometry={nodes.HellfireStand.geometry}
        material={config.lightStandMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);