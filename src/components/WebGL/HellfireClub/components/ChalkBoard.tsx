import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/chalk-board.glb";

type GLTFResult = GLTF & {
  nodes: {
    cta: THREE.Mesh;
    ChalkBoard: THREE.Mesh;
    ["xpass-texture"]: THREE.Mesh;
  };
  materials: {
    cta: THREE.MeshStandardMaterial;
    ChalkBoard: THREE.MeshStandardMaterial;
    ["xpass-texture"]: THREE.MeshStandardMaterial;
  };
};

export default ({ onCallToAction, ...props }: {
  onCallToAction?: () => void
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.cta.geometry}
        material={materials.cta}
        position={[0, 0, 0.005]}
        onClick={onCallToAction}
      />
      <mesh
        castShadow
        geometry={nodes.ChalkBoard.geometry}
        material={materials.ChalkBoard}
      />
      <mesh
        geometry={nodes["xpass-texture"].geometry}
        material={materials["xpass-texture"]}
      />
    </group>
  );
}

useGLTF.preload(url);