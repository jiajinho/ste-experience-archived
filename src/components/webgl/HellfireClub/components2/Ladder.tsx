import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/gltf/ladder.glb";

type GLTFResult = GLTF & {
  nodes: {
    Ladder: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const { ref, onClick } = useMover(props);

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.Ladder.geometry}
      >
        <meshStandardMaterial
          color={0xaaaaaa}
          metalness={0.82}
          roughness={0.37}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(url);