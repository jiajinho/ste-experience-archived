import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/glb/meeting-table.glb";

type GLTFResult = GLTF & {
  nodes: {
    Box003001: THREE.Mesh;
    Box002001: THREE.Mesh;
    Box004001: THREE.Mesh;
    Box001002: THREE.Mesh;
    Box005001: THREE.Mesh;
  };
  materials: {};
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const { ref, onClick } = useMover(props);

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh
        geometry={nodes.Box003001.geometry}
        material={nodes.Box003001.material}
        position={[-0.3, 0, -0.77]}
      />
      <mesh
        geometry={nodes.Box002001.geometry}
        material={nodes.Box002001.material}
        position={[-0.3, 0, 0.77]}
      />
      <mesh
        geometry={nodes.Box004001.geometry}
        material={nodes.Box004001.material}
        position={[0.3, 0, -0.77]}
      />
      <mesh
        geometry={nodes.Box001002.geometry}
        material={nodes.Box001002.material}
        position={[0, 0.72, 0]}
      />
      <mesh
        geometry={nodes.Box005001.geometry}
        material={nodes.Box005001.material}
        position={[0.3, 0, 0.77]}
      />
    </group>
  );
}

useGLTF.preload(url);