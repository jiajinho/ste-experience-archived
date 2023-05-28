import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const gltfUrl = "/static/gltf/box.glb";

type GLTFResult = GLTF & {
  nodes: {
    Box: THREE.Mesh;
  };
  materials: {
    box: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(gltfUrl) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Box.geometry}
        material={materials.box}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);