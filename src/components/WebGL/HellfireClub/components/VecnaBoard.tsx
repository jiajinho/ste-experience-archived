import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const gltfUrl = "/static/gltf/vecna-board.glb";

type GLTFResult = GLTF & {
  nodes: {
    CTA: THREE.Mesh;
    VecnaBoard: THREE.Mesh;
  };
  materials: {
    cta: THREE.MeshStandardMaterial;
    VecnaBoard: THREE.MeshStandardMaterial;
  };
};

export default ({ onCallToAction, ...props }: {
  onCallToAction?: () => void
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(gltfUrl) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.CTA.geometry}
        material={materials.cta}
        onClick={onCallToAction}
      />

      <mesh
        geometry={nodes.VecnaBoard.geometry}
        material={materials.VecnaBoard}
      >
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);