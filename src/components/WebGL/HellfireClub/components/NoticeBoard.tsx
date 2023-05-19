import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/notice-board.glb";

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
  const ref = useRef<THREE.Group>(null);

  return (
    <group ref={ref} {...props}>
      <mesh
        geometry={nodes.NoticeBoard.geometry}
        material={materials.NoticeBoard}
      />
    </group>
  );
}

useGLTF.preload(url);