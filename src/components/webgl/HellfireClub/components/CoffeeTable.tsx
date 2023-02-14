import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/glb/coffee-table.glb";

type GLTFResult = GLTF & {
  nodes: {
    coffeetable: THREE.Mesh;
  };
  materials: {};
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const { refs, onClick } = useMover(props);

  return (
    <group
      ref={refs.group}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh
        ref={refs.mesh}
        geometry={nodes.coffeetable.geometry}
        material={nodes.coffeetable.material}
      />
    </group>
  );
}

useGLTF.preload(url);