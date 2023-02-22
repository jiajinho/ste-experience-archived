import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/gltf/lamp.glb";

type GLTFResult = GLTF & {
  nodes: {
    Lamp: THREE.Mesh;
  };
  materials: {
    Lamp: THREE.MeshStandardMaterial;
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
        geometry={nodes.Lamp.geometry}
        material={materials.Lamp}
      />
    </group>
  );
}

useGLTF.preload(url);