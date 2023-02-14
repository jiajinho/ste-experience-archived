import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/glb/chair.glb";

type GLTFResult = GLTF & {
  nodes: {
    Chair_003: THREE.Mesh;
  };
  materials: {};
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const { ref, onClick } = useMover(props);

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      onClick={onClick}
    >
      <mesh
        geometry={nodes.Chair_003.geometry}
        material={nodes.Chair_003.material}
      />
    </group>
  );
}

useGLTF.preload(url);