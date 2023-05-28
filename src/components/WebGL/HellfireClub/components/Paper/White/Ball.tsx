import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/paper-white-ball.glb";

type GLTFResult = GLTF & {
  nodes: {
    PaperWhiteBall: THREE.Mesh;
  };
  materials: {
    paper: THREE.MeshPhysicalMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.PaperWhiteBall.geometry}
        material={materials.paper}
        scale={1.7}
      />
    </group>
  );
}

useGLTF.preload(url);