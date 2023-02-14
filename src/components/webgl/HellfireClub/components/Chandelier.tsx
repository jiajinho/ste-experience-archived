import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/glb/chandelier.glb";

type GLTFResult = GLTF & {
  nodes: {
    Box017: THREE.Mesh;
    flame008: THREE.Mesh;
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
        geometry={nodes.Box017.geometry}
        material={nodes.Box017.material}
      />
      <mesh
        geometry={nodes.flame008.geometry}
        material={nodes.flame008.material}
        position={[0, 0.27, 0]}
        rotation={[0, -0.04, 0]}
      />
    </group>
  );
}

useGLTF.preload(url);