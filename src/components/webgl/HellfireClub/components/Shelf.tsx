import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/gltf/shelf.glb";

type GLTFResult = GLTF & {
  nodes: {
    Shelf: THREE.Mesh;
  };
  materials: {
    Shelf: THREE.MeshStandardMaterial;
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
        geometry={nodes.Shelf.geometry}
        material={materials.Shelf}
      />
    </group>
  );
}

useGLTF.preload(url);