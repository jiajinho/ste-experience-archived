import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { applyRef } from "../utils";
import useMover from "../useMover";

const url = "/static/glb/bulletin-board.glb";

type GLTFResult = GLTF & {
  nodes: {
    Box008: THREE.Mesh;
  };
  materials: {};
};

export default React.forwardRef((
  props: JSX.IntrinsicElements["group"],
  ref: React.ForwardedRef<THREE.Group>
) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const { ref: _ref, onClick } = useMover(props);

  return (
    <group
      {...props}
      ref={g => applyRef([ref, _ref], g)}
      onClick={onClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.Box008.geometry}
        material={nodes.Box008.material}
      />
    </group>
  );
});

useGLTF.preload(url);