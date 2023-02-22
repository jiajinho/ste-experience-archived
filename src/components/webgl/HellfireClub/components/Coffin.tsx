import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/gltf/coffin.glb";

type GLTFResult = GLTF & {
  nodes: {
    Coffin: THREE.Mesh;
  };
  materials: {
    Coffin: THREE.MeshStandardMaterial;
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
        geometry={nodes.Coffin.geometry}
        material={materials.Coffin}
      />
    </group>
  );
}

useGLTF.preload(url);