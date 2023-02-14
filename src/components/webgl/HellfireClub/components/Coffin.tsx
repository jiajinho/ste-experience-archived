import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import useMover from "../useMover";

const url = "/static/glb/coffin.glb";

type GLTFResult = GLTF & {
  nodes: {
    coffin: THREE.Mesh;
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
        geometry={nodes.coffin.geometry}
        material={nodes.coffin.material}
      />
    </group>
  );
}

useGLTF.preload(url);