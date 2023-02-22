import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../../useMover";

const url = "/static/gltf/round-tabletop.glb";

type GLTFResult = GLTF & {
  nodes: {
    RoundTabletopLeg: THREE.Mesh;
    RoundTabletop: THREE.Mesh;
  };
  materials: {
    ["Round.Tabletop"]: THREE.MeshStandardMaterial;
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
        geometry={nodes.RoundTabletopLeg.geometry}
        material={materials["Round.Tabletop"]}
      />
      <mesh
        geometry={nodes.RoundTabletop.geometry}
        material={materials["Round.Tabletop"]}
      />
    </group>
  );
}

useGLTF.preload(url);