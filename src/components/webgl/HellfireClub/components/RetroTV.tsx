import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/gltf/retro-tv.glb";

type GLTFResult = GLTF & {
  nodes: {
    RetroTV: THREE.Mesh;
  };
  materials: {
    RetroTV: THREE.MeshStandardMaterial;
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
        geometry={nodes.RetroTV.geometry}
        material={materials.RetroTV}
      />
    </group>
  );
}

useGLTF.preload(url);