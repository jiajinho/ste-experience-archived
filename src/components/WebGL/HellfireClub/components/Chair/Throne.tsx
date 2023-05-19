import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/throne.glb";

type GLTFResult = GLTF & {
  nodes: {
    Throne: THREE.Mesh;
  };
  materials: {
    Throne: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  return (
    <group ref={ref} {...props}>
      <mesh
        geometry={nodes.Throne.geometry}
        material={materials.Throne}
      />
    </group>
  );
}

useGLTF.preload(url);