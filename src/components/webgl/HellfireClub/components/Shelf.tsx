import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";
import { applyRef } from "../utils";

const url = "/static/gltf/shelf.glb";

type GLTFResult = GLTF & {
  nodes: {
    Shelf: THREE.Mesh;
  };
  materials: {
    Shelf: THREE.MeshStandardMaterial;
  };
};

export default React.forwardRef((
  props: JSX.IntrinsicElements["group"],
  ref: React.ForwardedRef<THREE.Group>
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  const { ref: _ref, onClick } = useMover(props);

  return (
    <group
      ref={g => applyRef([ref, _ref], g)}
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
});

useGLTF.preload(url);