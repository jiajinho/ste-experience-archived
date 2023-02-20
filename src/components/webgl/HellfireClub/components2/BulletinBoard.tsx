import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/gltf/bulletin.glb";

type GLTFResult = GLTF & {
  nodes: {
    NoticeBoard: THREE.Mesh;
  };
  materials: {
    NoticeBoard: THREE.MeshStandardMaterial;
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
        geometry={nodes.NoticeBoard.geometry}
        material={materials.NoticeBoard}
      />
    </group>
  );
}

useGLTF.preload(url);