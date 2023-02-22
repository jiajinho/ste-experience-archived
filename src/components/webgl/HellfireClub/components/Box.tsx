import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/gltf/box.glb";

type GLTFResult = GLTF & {
  nodes: {
    Box: THREE.Mesh;
  };
  materials: {
    Box: THREE.MeshStandardMaterial;
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
        castShadow
        receiveShadow
        geometry={nodes.Box.geometry}
        material={materials.Box}
      />
    </group>
  );
}

useGLTF.preload(url);