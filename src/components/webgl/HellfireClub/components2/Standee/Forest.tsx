import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../../useMover";

const url = "/static/gltf/forest.glb";

type GLTFResult = GLTF & {
  nodes: {
    StandeeForest: THREE.Mesh;
  };
  materials: {
    Forest: THREE.MeshStandardMaterial;
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
        geometry={nodes.StandeeForest.geometry}
        material={materials.Forest}
      />
    </group>
  );
}

useGLTF.preload(url);