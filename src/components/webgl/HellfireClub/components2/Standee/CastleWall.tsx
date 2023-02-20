import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../../useMover";

const url = "/static/gltf/castlewall.glb";

type GLTFResult = GLTF & {
  nodes: {
    StandeeCastlewall: THREE.Mesh;
  };
  materials: {
    Castlewall: THREE.MeshStandardMaterial;
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
        geometry={nodes.StandeeCastlewall.geometry}
        material={materials.Castlewall}
      />
    </group>
  );
}

useGLTF.preload(url);